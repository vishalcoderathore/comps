import Link from './Link';
import React from 'react';

interface SideBarItem {
  label: string;
  path: string;
}

interface SidebarProps {
  links: SideBarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const renderedLinks = links.map(link => {
    return (
      <Link
        activeClassName='font-bold border-l-4 border-blue-500 pl-2'
        className='mb-3'
        key={link.label}
        to={link.path}>
        {link.label}
      </Link>
    );
  });
  return (
    <div className='items-start sticky top-0 overflow-y-scroll flex flex-col'>
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
