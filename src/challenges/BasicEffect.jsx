import { useEffect } from 'react';
import CounterEffect from './CounterEffect';

const BasicEffect = () => {
  useEffect(() => {
    console.log(
      'Hello World! Logging when component rendered initially (only)...'
    );
  }, []);

  return (
    <div>
      <CounterEffect />
    </div>
  );
};

export default BasicEffect;
