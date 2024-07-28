// src/components/Income.js
import React from 'react';

function Income({ revenue, expenses }) {
  const income = revenue - expenses;

  return (
    <div>
      <h2>Income</h2>
      <table>
        <tbody>
          <tr>
            <td>Revenue:</td>
            <td>${revenue}</td>
          </tr>
          <tr>
            <td>Expenses:</td>
            <td>${expenses}</td>
          </tr>
          <tr>
            <td>Income:</td>
            <td>${income}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Income;
