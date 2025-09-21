import { createPortal } from 'react-dom';
import './Alert.css';

function Alert({ isOpen, onClose }) {
  function closeAlert() {}

  if (!isOpen) {
    return null;
  } else if (isOpen) {
    return createPortal(
      <div className="alert-container">
        <div className="alert-box">
          <h5>Alert</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            adipisci nemo totam temporibus qui reprehenderit dolores blanditiis
            magnam veniam sint.
          </p>
          <button onClick={onClose}>Okay, Got It</button>
        </div>
      </div>,
      document.getElementById('alert')
    );
  }
}

/*
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
*/

export default Alert;
