import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import Route from './components/base/Route';
import Link from './components/base/Link';
import { ReactElement } from 'react';
import './App.css';

function App(): ReactElement {
  return (
    <div>
      <Link to='/accordion'>Accordion</Link>
      <Link to='/dropdown'>Dropdown</Link>
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
