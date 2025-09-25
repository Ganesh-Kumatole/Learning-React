import { useRef, useState } from 'react';

const FocusInput = () => {
  const [heading, setHeading] = useState('Input: Not Focussed, Yet!');
  const inputRef = useRef(null);
  const h3Ref = useRef(null);

  console.log('<h3> Reference: ', h3Ref);
  console.log('<input> Reference: ', inputRef);

  function focusAtInput(e) {
    inputRef.current.focus();
    setHeading('Input: Focussed!');
  }

  return (
    <div>
      <h3 ref={h3Ref}>{heading}</h3>
      <input type="text" ref={inputRef} />
      <button onClick={focusAtInput}>Click Here to Focus Input</button>
    </div>
  );
};

export default FocusInput;
