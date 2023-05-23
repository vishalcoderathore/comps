import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table, { TableProps } from './Table';
import useSort from '../../hooks/use-sort';
import { ReactElement } from 'react';

// Use same TableProps for SortableTable
const SortableTable = <T,>(props: TableProps<T>): ReactElement => {
  const { config, data } = props;
  const { sortOrder, sortedData, sortBy, setSortColumn } = useSort(config, data);

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
        <th className="cursor-pointer hover:bg-gray-100" onClick={(): void => setSortColumn(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
