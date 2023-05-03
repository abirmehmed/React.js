import "./code.css";
import React from 'react';
const CodeSnippet = () => {
  const code = `const add = (a, b) => {
    return a + b;
  };`;
  return (
    <pre>
      <code className = "Code">{code}</code>
    </pre>
  );
};
export default CodeSnippet;
