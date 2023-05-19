import React, { useEffect, useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Pannel';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: DropdownOption | null;
  onChange: (option: DropdownOption) => void;
  selectLabel?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  selectLabel = 'Select...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement | null>(null);
  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOption): void => {
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    const handler = (event: MouseEvent): void => {
      if (divEl.current && !divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    // Cleanup function to remove event listener when component unmounts
    return (): void => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const renderedOptions = options.map(option => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className='hover:bg-sky-100 rounded cursor-pointer p-1'
      onClick={(): void => handleOptionClick(option)}
      key={option.value}>
      {option.label}
    </div>
  ));

  return (
    <div className='w-48 relative' ref={divEl}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}>
        {value?.label || selectLabel}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
