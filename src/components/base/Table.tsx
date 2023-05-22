import { Fragment, ReactElement, ReactNode } from 'react';

interface RenderConfig<T> {
  label: string;
  render: (item: T) => ReactNode;
  header?: () => ReactElement;
  sortValue?: (item: T) => ReactNode;
}

export interface TableProps<T> {
  data: T[];
  config: RenderConfig<T>[];
  keySelector: (item: T) => string | number;
}

const Table = <T,>({ config, data, keySelector }: TableProps<T>): ReactElement => {
  const renderedHeaders = config.map((property, index) => {
    if (property.header) {
      return <Fragment key={index}>{property.header()}</Fragment>; // Call the function here
    }
    return <th key={index}>{property.label}</th>; // Use index as key here
  });

  const renderRows = data.map(rowData => {
    const renderedCells = config.map((column, index) => (
      <td className="p-2" key={index}>
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr className="border-b" key={keySelector(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
