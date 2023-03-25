/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import Template from './Template/Template';
import Albums from './Pages/Albums';
import Counter from './Pages/Counter';
import Users from './Pages/Users';

import './App.css';

const pages = {
  albuns: {
    text: 'Álbuns',
    component: Albums,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  Users: {
    text: 'Usuários',
    component: Users,
  },
};

const App = () => {
  const [page, setPage] = useState('albuns');

  const handleOnChangePage = (page) => {
    setPage(page);
  };

  const Page = pages[page].component;

  return (
    <Template pages={pages} onChangePage={handleOnChangePage}>
      {Page && <Page />}
    </Template>
  );
};

export default App;
