import React, { useState } from 'react';
const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [array, setArray] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleAddToArray = () => {
    setArray([...array, inputValue]);
    setInputValue('');
  }
  const handleDeleteItem = (index) => {
    setArray(array.filter((_, i) => i !== index));
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddToArray}>Add to Array</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default InputComponent;
