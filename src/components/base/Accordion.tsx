import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import React, { useState } from 'react';

interface AccordionItem {
  id: number;
  label: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number): void => {
    setExpandedIndex(prevIndex => (nextIndex === prevIndex ? -1 : nextIndex));
  };

  const displayData = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className='text-2xl'>
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
          onClick={(): void => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return <div className='border-x border-t rounded'>{displayData}</div>;
};

export default Accordion;
