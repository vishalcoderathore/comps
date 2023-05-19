import { createContext, useState, ReactNode, useEffect } from 'react';

export interface NavigationContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = (): void => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return (): void => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to: string): void => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
export { NavigationProvider };
export default NavigationContext;
