import React, {useState} from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const buttonStyles = {
    fontSize: '4rem',
    background: 'green',
    borderRadius: '1rem',
    display: 'block',
    cursor: 'pointer',
    width: '20rem'
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <p style={{fontSize: "4rem"}}>You clicked {count} times.</p>
      <button focusable='true' style={buttonStyles} type="button" onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}