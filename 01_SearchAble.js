/* Create a React component that allows users to search through an array of objects and display the results in a table. */
/* searchable.js*/
import React, { useState } from 'react';
const SearchTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <>
      <input type="text" onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default SearchTable;

/* App.js */

import SearchTable from "./searchtable";
import "./styles.css";
const data = [];
for (let i = 1; i <= 1000; i++) {
  data.push({
    id: i,
    name: `Name ${i}`,
    age: Math.floor(Math.random() * 100),
  });
}
const App = () => {
  return <SearchTable data={data} />;
};
export default App;
