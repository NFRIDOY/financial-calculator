// src/components/Revenue.js
import React, { useState } from 'react';

function Revenue({ addWebsite }) {
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (price) {
      addWebsite(parseFloat(price));
      setPrice('');
    }
  };

  return (
    <div>
      <h2>Revenue</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Website price"
              />
            </td>
            <td>
              <button onClick={handleAdd}>Add Website</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Revenue;
