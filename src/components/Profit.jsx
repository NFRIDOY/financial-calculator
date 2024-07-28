// src/components/Profit.js
import React from 'react';

function Profit({ gross, operating, net }) {
    return (
        <div>
            <h2>Profit</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Gross Profit:</td>
                        <td>${gross}</td>
                    </tr>
                    <tr>
                        <td>Operating Profit:</td>
                        <td>${operating}</td>
                    </tr>
                    <tr>
                        <td>Net Profit:</td>
                        <td>${net}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Profit;
