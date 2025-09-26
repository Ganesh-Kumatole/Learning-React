import { useId } from 'react';
import './Form.css';

function Form() {
  const id = useId();

  return (
    <form>
      <h3 className="form-heading">Application Form</h3>
      <div className="name-field">
        <label htmlFor={`${id}-name`}>Name: </label>
        <input type="text" id={`${id}-name`} required />
      </div>
      <div className="email-field">
        <label htmlFor={`${id}-email`}>E-mail: </label>
        <input type="text" id={`${id}-email`} required />
      </div>
      <div className="gender-field">
        <div className="male">
          <label htmlFor={`${id}-male`}>Male</label>
          <input type="radio" id={`${id}-male`} required />
        </div>
        <div className="female">
          <label htmlFor={`${id}-female`}>Female: </label>
          <input type="radio" id={`${id}-female`} required />
        </div>
      </div>

      <button>Submit</button>
    </form>
  );
}

export default Form;
