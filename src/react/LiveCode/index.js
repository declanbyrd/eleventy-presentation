import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import React from "react";

import { Counter } from '../Counter';

const code = `
() => {
  const [count, setCount] = React.useState(0);

  const buttonStyles = {
    fontSize: '2rem',
    background: 'var(--color-accent)',
    color: 'var(--color-background)',
    borderRadius: '1rem',
    display: 'block',
    cursor: 'pointer',
    width: '20rem'
  }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: 'center'}}>
      <p style={{fontSize: "2rem"}}>You clicked {count} times.</p>
      <button 
        focusable='true' 
        style={buttonStyles} 
        type="button" 
        onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}
`;
const scope = { Counter };

export const LiveCode = () => {
  return (
    <>
      <LiveProvider code={code} scope={scope} theme={nightOwl}>
        <LivePreview style={{display: 'flex',justifyContent: 'center'}}/>
        <LiveEditor style={{background: "var(--code-editor)", fontSize: "1rem", borderRadius: '0.5rem'}}/>
        <LiveError />
      </LiveProvider>
    </>
  );
};
