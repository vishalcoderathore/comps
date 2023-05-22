import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import { ReactElement, useState } from 'react';
import Table, { TableProps } from './Table';

// Use same TableProps for SortableTable
const SortableTable = <T,>(props: TableProps<T>): ReactElement => {
  // State variables for sortOrder and sortBy
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  // Function to handle clicking on a table column label
  const handleClick = (label: string): void => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const { config, data } = props;

  // Create a new configuration for table columns with sorting capability
  const updatedConfig = config.map(column => {
    // If column does not have a sortValue function, keep it as is
    if (!column.sortValue) {
      return column;
    }
    // Add a click handler to column header for sorting
    return {
      ...column,
      header: (): ReactElement => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={(): void => handleClick(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Initialize sortedData with the original data
  let sortedData = data;

  // If a column to sort by and a sort order are defined
  if (sortOrder && sortBy) {
    // Get the configuration of the column to sort by
    const columnConfig = config.find(column => column.label === sortBy);

    // If column configuration and a sortValue function exist
    if (columnConfig && typeof columnConfig.sortValue === 'function') {
      // Get the sortValue function
      const sortValue = columnConfig.sortValue;

      // Sort the data based on the sortValue function and sort order
      sortedData = [...data].sort((a, b) => {
        const [valueA, valueB] = [sortValue(a), sortValue(b)];
        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        // Compare the sorted values differently depending on their type
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return (valueA - valueB) * reverseOrder;
        } else if (typeof valueA === 'string' && typeof valueB === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder;
        }

        // Default case: return 0 (no change in order)
        return 0;
      });
    }
  }

  // Render the table with sorted data and updated configuration
  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

// Function to decide which icons to show based on sort order and sorted column
function getIcons(label: string, sortBy: string | null, sortOrder: string | null): ReactElement {
  // Show both arrows if this column is not the one being sorted
  const defaultArrows = (
    <div>
      <GoArrowSmallUp />
      <GoArrowSmallDown />
    </div>
  );

  if (label !== sortBy || sortOrder === null) {
    return defaultArrows;
  } else if (sortOrder === 'asc') {
    return <GoArrowSmallUp />;
  } else if (sortOrder === 'desc') {
    return <GoArrowSmallDown />;
  }

  // In case any unexpected values: return empty component
  return <></>;
}

export default SortableTable;
