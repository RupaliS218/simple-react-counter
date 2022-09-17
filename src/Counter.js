import React, { useState } from "react";

const Counter = () => {
  const [count, Setcount] = useState(0);
  return (
    <>
      <section>
        <h2>Simple Counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={() => Setcount(count + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => Setcount(count - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => Setcount(0)}>
          Reset
        </button>
      </section>
    </>
  );
};

export default Counter;
