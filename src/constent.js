const Content = () => {
  const handleNameChange = () => {
    const name = ["bob", "kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  };

  const handleClick = () => {
    console.log("You Clicked It");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was Clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>

      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2("Dave")}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
