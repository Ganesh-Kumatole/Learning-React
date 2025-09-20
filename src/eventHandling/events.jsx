function Button() {
  function handleSingleClick() {
    alert('You Single Clicked Me...');
  }

  function handleCut() {
    alert('Why are you extracting my content?...');
  }

  return (
    <div>
      <p onCut={handleCut}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nemo.
      </p>
      <button onClick={handleSingleClick}>Click Here Now</button>;
    </div>
  );
}

export default Button;
