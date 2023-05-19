import useNavigationContext from '../../hooks/use-navigation-context';
import React, { ReactNode } from 'react';
interface RouteProps {
  path: string;
  children: ReactNode;
}

const Route: React.FC<RouteProps> = ({ path, children }) => {
  const context = useNavigationContext();
  const currentPath = context?.currentPath;

  if (currentPath && path === currentPath) {
    return <>{children}</>;
  }

  return null;
};

export default Route;
