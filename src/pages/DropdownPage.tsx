import Dropdown, { DropdownOption } from '../components/base/Dropdown';
import React, { useState } from 'react';

const DropdownPage: React.FC = () => {
  const [selection, setSelection] = useState<DropdownOption | null>(null);

  const handleSelect = (option: DropdownOption): void => {
    setSelection(option);
  };
  const options = [
    {
      label: 'Italian',
      value: 'pizza',
    },
    {
      label: 'Indian',
      value: 'butter_chicken',
    },
    {
      label: 'Chinese',
      value: 'dimson',
    },
  ];

  return (
    <div>
      <h1>Select an option</h1>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;
