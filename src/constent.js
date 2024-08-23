import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);


  const handleNameChange = () => {
    const name = ["bob", "kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(name[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = () => {
    console.log(count);
  };
 

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>

      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </main>
  );
};

export default Content;
