import useNavigationContext from '../../hooks/use-navigation-context';
import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const classes = classNames('text-blue-500');
  const context = useNavigationContext();
  const noop = (): void => {
    console.log('[EMPTY CONTEXT]');
  };
  const navigate = context?.navigate || noop; // Default function that does nothing
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    // Support pressing Ctrl key and clicking navigation items to open up in a new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
