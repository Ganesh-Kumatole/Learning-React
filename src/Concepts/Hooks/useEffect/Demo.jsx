import { useState, useEffect } from 'react';

function Demo() {
  const [result, setResult] = useState('');
  const [number, setNumber] = useState(0);

  function updateResult(e) {
    const input = e.target;
    setResult(input.value);
  }

  useEffect(() => {
    const fetchComments = async () => {
      const API_URL = 'https://jsonplaceholder.typicode.com';
      const response = await fetch(`${API_URL}/comments`);
      const data = await response.json();

      console.log(data[0].body);
    };

    fetchComments();
  }, [number]);

  return (
    <div>
      <input type="text" onChange={updateResult} />
      <p> You're Typing: {result} </p>
    </div>
  );
}

export default Demo;
