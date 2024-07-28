// src/App.js
import React, { useState } from 'react';
import Revenue from './components/Revenue';
import Expenses from './components/Expenses';
import Income from './components/Income';
import Profit from './components/Profit';
import './App.css';

function App() {
  const [websites, setWebsites] = useState([]);
  const [expenses, setExpenses] = useState({
    salaries: 0,
    software: 0,
    domain:0,
    hosting: 0,
    office: 0,
    marketing: 0,
    miscellaneous: 0,
    hardware: 0,
  });

  const handleAddWebsite = (price) => {
    setWebsites([...websites, price]);
  };

  const handleExpenseChange = (type, amount) => {
    setExpenses({ ...expenses, [type]: parseFloat(amount) });
  };

  const totalRevenue = websites.reduce((total, price) => total + price, 0);
  const totalExpenses = Object.values(expenses).reduce((total, expense) => total + expense, 0);
  const income = totalRevenue - totalExpenses;
  const grossProfit = totalRevenue - expenses.salaries - expenses.software - expenses.domain - expenses.hosting; // Example calculation
  const operatingProfit = grossProfit - expenses.office - expenses.marketing;
  const netProfit = operatingProfit - expenses.miscellaneous;

  return (
    <section className='App-container'>
      <h1>Financial Calculator</h1>
      <div className="App">
        <div className='App-children'>
          <Revenue addWebsite={handleAddWebsite} />
          <Expenses onChange={handleExpenseChange} />
        </div>
        <div className='App-children'>
          <Income revenue={totalRevenue} expenses={totalExpenses} />
          <Profit gross={grossProfit} operating={operatingProfit} net={netProfit} />
        </div>
      </div>
    </section>
  );
}

export default App;
