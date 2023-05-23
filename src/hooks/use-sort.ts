import { RenderConfig } from '../components/base/Table';
import { useState } from 'react';

interface UseSortResult<T> {
  sortOrder: 'asc' | 'desc' | null;
  sortedData: T[];
  sortBy: string | null;
  setSortColumn: (label: string) => void;
}

function useSort<T>(config: RenderConfig<T>[], data: T[]): UseSortResult<T> {
  // State variables for sortOrder and sortBy
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  // Function to handle clicking on a table column label
  const setSortColumn = (label: string): void => {
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
  return {
    sortOrder,
    sortedData,
    sortBy,
    setSortColumn,
  };
}

export default useSort;
