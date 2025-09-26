import { useEffect, useState } from 'react';

function FetchDataEffect() {
  const [postId, setPostId] = useState(0);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    const fetchPostDetails = async (postNumber) => {
      const baseURL = 'https://jsonplaceholder.typicode.com';
      const response = await fetch(`${baseURL}/posts/${postNumber}`);
      const { id, title, body } = await response.json();

      setPostId(id);
      setPostTitle(title);
      setPostBody(body);
    };

    const postNumber = Math.floor(Math.random() * 100);
    fetchPostDetails(postNumber);
  }, [postId, postTitle, postBody]);

  return (
    <div>
      <ul>
        <li>Post ID: {postId}</li>
        <li>Post Title: {postTitle}</li>
        <li>Post Body: {postBody}</li>
      </ul>
    </div>
  );
}

export default FetchDataEffect;
