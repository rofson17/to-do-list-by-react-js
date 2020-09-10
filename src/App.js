import React, { useState } from 'react';

function App() {

  const [inputlist, setInput] = useState();
  const [items, setItem] = useState([]);

  const inputEvent = (data) => {
    setInput(data.target.value);

  };

  const submit = () => {
    setItem((oldItems) => {
      return [...oldItems, inputlist];
    })
    setInput('');
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h2>ToDo List</h2>
          <input type="text" placeholder="Items" onChange={inputEvent} value={inputlist} />
          <button onClick={submit}> + </button>
          <ol>
            {items.map((itemval) => {
              return <li>{itemval}</li>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
