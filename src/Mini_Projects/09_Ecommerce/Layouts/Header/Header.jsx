import { FaShoppingCart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import './Header.css';
import logo from '../../assets/running-shoes.png';

const Header = (props) => {
  const { searchFilter, setSearchFilter } = props;

  const handleInput = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <input
          type="text"
          className="search-filter"
          placeholder="Enter footwear name to filter..."
          onChange={handleInput}
          value={searchFilter}
        />
        <div className="nav-icons">
          <div className="cart-icon">
            <FaShoppingCart />
          </div>
          <div className="user-icon">
            <FaUserCircle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
