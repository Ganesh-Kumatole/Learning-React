import useFetchPostBody from './useFetch';

function Above() {
  const aboveData = useFetchPostBody(-15);
  return <div>Above Data: {aboveData}</div>;
}

export default Above;
