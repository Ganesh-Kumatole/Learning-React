import { userContext } from './UserContext';
import { useContext } from 'react';

const UserProfile = () => {
  const { userName, setUserName } = useContext(userContext);

  function displayFullName(e) {
    setUserName('Ganesh Kumatole');
  }

  return (
    <div>
      <h2>User_Name: {userName}</h2>
      <button
        onClick={displayFullName}
        style={{
          backgroundColor: 'green',
          height: '2rem',
          width: 'auto',
          padding: '0.3rem 0.5rem',
          color: 'white',
        }}
      >
        Click here to Display Full Name
      </button>
    </div>
  );
};

export default UserProfile;
