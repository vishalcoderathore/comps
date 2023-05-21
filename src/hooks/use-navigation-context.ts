import NavigationContext, { NavigationContextType } from '../context/navigation';
import { useContext } from 'react';

function useNavigationContext(): NavigationContextType | undefined {
  return useContext(NavigationContext);
}

export default useNavigationContext;
