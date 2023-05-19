import Accordion from '../components/base/Accordion';
import React from 'react';

const AccordionPage: React.FC = () => {
  const items = [
    {
      id: Math.random(),
      label:
        '[LABEL 1] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum, mollitia numquam debitis iusto repellat ea quae dicta. Natus labore aut mollitia at tempore veritatis blanditiis, beatae exercitationem similique rem?',
      content:
        '[CONTENT 1] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa quisquam dolore, delectus quo sed rerum soluta quaerat cupiditate, qui tempora sequi quia corporis ratione porro adipisci, natus vel vero!',
    },
    {
      id: Math.random(),
      label:
        '[LABEL 2] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum, mollitia numquam debitis iusto repellat ea quae dicta. Natus labore aut mollitia at tempore veritatis blanditiis, beatae exercitationem similique rem?',
      content:
        '[CONTENT 2] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa quisquam dolore, delectus quo sed rerum soluta quaerat cupiditate, qui tempora sequi quia corporis ratione porro adipisci, natus vel vero!',
    },
    {
      id: Math.random(),
      label:
        '[LABEL 3] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum, mollitia numquam debitis iusto repellat ea quae dicta. Natus labore aut mollitia at tempore veritatis blanditiis, beatae exercitationem similique rem?',
      content:
        '[CONTENT 3] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa quisquam dolore, delectus quo sed rerum soluta quaerat cupiditate, qui tempora sequi quia corporis ratione porro adipisci, natus vel vero!',
    },
    {
      id: Math.random(),
      label:
        '[LABEL 4] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum, mollitia numquam debitis iusto repellat ea quae dicta. Natus labore aut mollitia at tempore veritatis blanditiis, beatae exercitationem similique rem?',
      content:
        '[CONTENT 4] : Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa quisquam dolore, delectus quo sed rerum soluta quaerat cupiditate, qui tempora sequi quia corporis ratione porro adipisci, natus vel vero!',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
