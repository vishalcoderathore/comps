import NavigationContext, {
  NavigationContextType,
} from '../../context/navigation';
import React, { ReactNode, useContext } from 'react';

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const context = useContext<NavigationContextType | undefined>(
    NavigationContext,
  );
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
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
