import { useState } from 'react';
import UserProvider from './challege_useContext/UserContext';
import './App.css';

const App = () => {
  return (
    <div>
      <UserProvider />
    </div>
  );
};

export default App;
