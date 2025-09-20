import Demo from './useEffect/Demo';
import Alert from './portals/Alert';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function fireAlert() {
    setIsOpen(true);
  }

  function closeAlert() {
    setIsOpen(false);
  }

  return (
    <section>
      <button onClick={fireAlert}>Dare you click here!</button>
      <Alert isOpen={isOpen} onClose={closeAlert} />
    </section>
  );
};

export default App;
