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
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex: number): void => {
    setExpandedIndex(nextIndex);
  };

  const displayData = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.id}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div onClick={(): void => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{displayData}</div>;
};

export default Accordion;
