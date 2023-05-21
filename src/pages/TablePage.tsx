import Table from '../components/base/Table';
import { ReactNode } from 'react';

interface Fruit {
  name: string;
  color: string;
  score: number;
}

const TablePage = (): ReactNode => {
  // Map of colors to Tailwind color classes
  const colorMap: { [key: string]: string } = {
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
  };

  const data = [
    {
      name: 'Orange',
      color: 'orange',
      score: 5,
    },
    {
      name: 'Apple',
      color: 'red',
      score: 3,
    },
    {
      name: 'Banana',
      color: 'yellow',
      score: 7,
    },
    {
      name: 'Berry',
      color: 'blue',
      score: 8,
    },
    {
      name: 'Lime',
      color: 'green',
      score: 4,
    },
  ];

  const config = [
    {
      label: 'Name',
      render: (fruit: Fruit): ReactNode => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit: Fruit): ReactNode => (
        <div className={`w-10 h-10 rounded-full ${colorMap[fruit.color]} p-3 m-2`}></div>
      ),
    },
    {
      label: 'Score',
      render: (fruit: Fruit): ReactNode => fruit.score,
    },
  ];

  return (
    <div>
      <Table data={data} config={config} keySelector={(item): string | number => item.name} />
    </div>
  );
};

export default TablePage;
