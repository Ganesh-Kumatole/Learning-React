import { createContext, useState } from 'react';
import UserProfile from './UserProfile';

// Define Context
export const userContext = createContext(null);

// UserProfile Component
const UserProvider = () => {
  const [userName, setUserName] = useState('Ganesh');

  const userContextValue = {
    userName,
    setUserName,
  };

  return (
    <div>
      <userContext.Provider value={userContextValue}>
        <UserProfile />
      </userContext.Provider>
    </div>
  );
};

export default UserProvider;
