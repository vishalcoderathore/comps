import useNavigationContext from '../../hooks/use-navigation-context';
import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface LinkProps {
  activeClassName: string;
  children: ReactNode;
  className?: string;
  to: string;
}

const Link: React.FC<LinkProps> = ({ activeClassName, children, className, to }) => {
  const context = useNavigationContext();
  const noop = (): void => {
    console.log('[EMPTY CONTEXT]');
  };
  const navigate = context?.navigate || noop; // Default function that does nothing
  const currentPath = context?.currentPath || '';

  // Custom Styling
  const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);

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
