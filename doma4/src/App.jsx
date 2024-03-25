// Da se kreira sign up forma (so min 5 polinja) i button koj na klik ke gi prikaze vnesenite
// vrednosti vo edna tabela, a na povtoren klik ke ja trgne (skrie) tabelata.

import React, { useState } from 'react';
import { SignupForm } from './components/SignupForm';

export function App() {
  const [formData, setFormData] = useState({});
  const [showTable, setShowTable] = useState(false);

  const signup = (data) => {
    setFormData(data);
    setShowTable(true);
  };

  const removeTable = () => {
    setShowTable(false);
  };

  return (
    <div>
      <SignupForm sign={signup} />
      {showTable && (
        <div>
          <h2>User Information: </h2>
          <button onClick={removeTable}>Remove Table</button>
          <br />
          <br />
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', textAlign: 'left', padding: '5px' }}>Form Field</th>
                <th style={{ border: '1px solid black', textAlign: 'left', padding: '5px' }}>Entered Data</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(formData).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ border: '1px solid grey', textAlign: 'left', padding: '5px' }}>{key}</td>
                  <td style={{ border: '1px solid grey', textAlign: 'left', padding: '5px' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}













