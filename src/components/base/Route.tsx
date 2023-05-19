import NavigationContext, {
  NavigationContextType,
} from '../../context/navigation';
import React, { ReactNode, useContext } from 'react';

interface RouteProps {
  path: string;
  children: ReactNode;
}

const Route: React.FC<RouteProps> = ({ path, children }) => {
  const context = useContext<NavigationContextType | undefined>(
    NavigationContext,
  );
  const currentPath = context?.currentPath;

  if (currentPath && path === currentPath) {
    return <>{children}</>;
  }

  return null;
};

export default Route;
