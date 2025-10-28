import Header from './Mini_Projects/09_Ecommerce/Layouts/Header/Header.jsx';
import Sidebar from './Mini_Projects/09_Ecommerce/Layouts/Sidebar/Sidebar.jsx';
import Products from './Mini_Projects/09_Ecommerce/Layouts/Products/Products.jsx';
import { useState } from 'react';
import './App.css';

const App = () => {
  // State to manage search filtering
  const [searchFilter, setSearchFilter] = useState('');

  // State to manage radio filtering
  const [radioFilter, setRadioFilter] = useState({
    category: null,
    brand: null,
    rating: null,
    color: 'all',
  });

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <>
      <Header searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <main>
        <Sidebar setRadioFilter={setRadioFilter} radioFilter={radioFilter} />
        <Products searchFilter={searchFilter} radioFilter={radioFilter} />
      </main>
    </>
  );
};

export default App;
