import useFetchPostBody from './useFetch.jsx';

const Below = () => {
  const belowData = useFetchPostBody(71);
  return <div>Below Data: {belowData}</div>;
};

export default Below;
