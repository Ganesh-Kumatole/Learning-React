// Importing the context object
import { data } from '../App';
// Importing useContext() Hook
import { useContext } from 'react';

const Card = () => {
  const rating = useContext(data);

  return (
    <div>
      <div>
        {/* Way 01 to consume data... 
        <data.Consumer>
          {(rating) => {
            return (
              <div>
                <h3>Rating: {rating}</h3>
              </div>
            );
          }}
        </data.Consumer>
        */}
      </div>
      <div>
        {/* Way 02 to consume data (modern way)... */}
        <h2>Rating: {rating} </h2>
      </div>
    </div>
  );
};

export default Card;
