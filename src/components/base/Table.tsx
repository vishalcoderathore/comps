import { ReactElement, ReactNode } from 'react';

interface RenderConfig<T> {
  label: string;
  render: (item: T) => ReactNode;
}

interface TableProps<T> {
  data: T[];
  config: RenderConfig<T>[];
  keySelector: (item: T) => string | number;
}

const Table = <T,>({ config, data, keySelector }: TableProps<T>): ReactElement => {
  const renderedHeaders = config.map(({ label }) => {
    return <th key={label}>{label}</th>;
  });

  const renderRows = data.map(rowData => {
    const renderedCells = config.map(column => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

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
