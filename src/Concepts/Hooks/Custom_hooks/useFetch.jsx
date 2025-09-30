import { useState, useEffect } from 'react';

const useFetchPostBody = function (postNumber) {
  // Define State
  const [caption, setCaption] = useState('');

  // Fetch Post Data
  useEffect(() => {
    async function fetchData(postNumber) {
      const baseURL = 'https://jsonplaceholder.typicode.com';
      try {
        const response = await fetch(`${baseURL}/posts/${postNumber}`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.statusText} ${response.status} `);
        }
        const data = await response.json();
        setCaption(data.body);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData(postNumber);
  }, []);

  return caption;
};

export default useFetchPostBody;
