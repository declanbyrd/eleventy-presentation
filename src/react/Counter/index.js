import React, {useState} from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const buttonStyles = {
    fontSize: '4rem',
    background: 'var(--color-accent)',
    color: 'var(--color-background)',
    borderRadius: '1rem',
    cursor: 'pointer',
  }

  return (
    <div style={{display: "grid"}}>
      <p style={{fontSize: "4rem", margin: "0 0 1rem 0"}}>You clicked {count} times.</p>
      <button focusable='true' style={buttonStyles} type="button" onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}