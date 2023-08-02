import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        Count Increase
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default User;