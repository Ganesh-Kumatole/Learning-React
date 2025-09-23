const user = [
  {
    name: 'Tej',
    place: 'Maharashtra',
    rollNo: 14,
  },
  {
    name: 'Reshma',
    place: 'Tamil Nadu',
    rollNo: 21,
  },
  {
    name: 'Rohan',
    place: 'Kerala',
    rollNo: 34,
  },
  {
    name: 'Ganesh',
    place: 'Delhi',
    rollNo: 45,
  },
];

const UserInfo = (propsObj) => {
  const { name, roll, place, index } = propsObj;

  return (
    <div className="userInfo">
      <h3 style={{ fontSize: '1rem', backgroundColor: 'yellow' }}>
        <FaUser /> User {index + 1}
      </h3>
      <ol>
        <li>Name: {name}</li>
        <li>Roll: {roll}</li>
        <li>Place: {place}</li>
      </ol>
    </div>
  );
};

/*
const App = () => {
  return (
    <section>
      {user.map(({ name, rollNo, place }, i) => (
        <UserInfo
          name={name}
          roll={rollNo}
          place={place}
          index={i}
          key={rollNo}
        />
      ))}
    </section>
  );
};

export default App;
*/

export { user, UserInfo };
