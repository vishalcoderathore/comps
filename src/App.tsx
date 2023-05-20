import AccordionPage from './pages/AccordionPage';
import Sidebar from './components/base/Sidebar';
import DropdownPage from './pages/DropdownPage';
import Route from './components/base/Route';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import { ReactElement } from 'react';
import './App.css';

function App(): ReactElement {
  const links = [
    {
      label: 'Accordion',
      path: '/accordion',
    },
    {
      label: 'Button',
      path: '/button',
    },
    {
      label: 'Dropdown',
      path: '/dropdown',
    },
    {
      label: 'Modal',
      path: '/modal',
    },
  ];

  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar links={links} />
      <div className='col-span-5'>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
