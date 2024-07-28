// src/components/Expenses.js
import React from 'react';

function Expenses({ onChange }) {
    const handleChange = (type) => (e) => {
        onChange(type, e.target.value);
    };

    return (
        <div>
            <h2>Expenses</h2>
            <table>
                <tbody>
                    <tr>
                        <td><label>Salaries: </label></td>
                        <td><input type="number" onChange={handleChange('salaries')} placeholder="Salaries" /></td>
                    </tr>
                    <tr>
                        <td><label>Software: </label></td>
                        <td><input type="number" onChange={handleChange('software')} placeholder="Software" /></td>
                    </tr>
                    <tr>
                        <td><label>Domain: </label></td>
                        <td><input type="number" onChange={handleChange('domain')} placeholder="Domain" /></td>
                    </tr>
                    <tr>
                        <td><label>Hosting: </label></td>
                        <td><input type="number" onChange={handleChange('hosting')} placeholder="Hosting" /></td>
                    </tr>
                    <tr>
                        <td><label>Office: </label></td>
                        <td><input type="number" onChange={handleChange('office')} placeholder="Office" /></td>
                    </tr>
                    <tr>
                        <td><label>Marketing: </label></td>
                        <td><input type="number" onChange={handleChange('marketing')} placeholder="Marketing" /></td>
                    </tr>
                    <tr>
                        <td><label>Miscellaneous: </label></td>
                        <td><input type="number" onChange={handleChange('miscellaneous')} placeholder="Miscellaneous" /></td>
                    </tr>
                    <tr>
                        <td><label>Hardware: </label></td>
                        <td><input type="number" onChange={handleChange('hardware')} placeholder="Hardware" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Expenses;
