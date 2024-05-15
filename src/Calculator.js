// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [display, setDisplay] = useState('');

    const appendToDisplay = (value) => {
        setInput(input + value);
        setDisplay(display + value);
    };

    const clearDisplay = () => {
        setInput('');
        setDisplay('');
    };

    const calculate = () => {
        try {
            const result = eval(input);
            setDisplay(result);
        } catch (error) {
            setDisplay('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <input type="text" value={display} readOnly />
            <div className="button-row">
                <button className="button" onClick={() => appendToDisplay('7')}>7</button>
                <button className="button" onClick={() => appendToDisplay('8')}>8</button>
                <button className="button" onClick={() => appendToDisplay('9')}>9</button>
                <button className="button" onClick={() => appendToDisplay('/')}>/</button>
            </div>
            <div className="button-row">
                <button className="button" onClick={() => appendToDisplay('4')}>4</button>
                <button className="button" onClick={() => appendToDisplay('5')}>5</button>
                <button className="button" onClick={() => appendToDisplay('6')}>6</button>
                <button className="button" onClick={() => appendToDisplay('*')}>*</button>
            </div>
            <div className="button-row">
                <button className="button" onClick={() => appendToDisplay('1')}>1</button>
                <button className="button" onClick={() => appendToDisplay('2')}>2</button>
                <button className="button" onClick={() => appendToDisplay('3')}>3</button>
                <button className="button" onClick={() => appendToDisplay('-')}>-</button>
            </div>
            <div className="button-row">
                <button className="button" onClick={() => appendToDisplay('0')}>0</button>
                <button className="button" onClick={() => appendToDisplay('.')}>.</button>
                <button id="clear" className="button" onClick={clearDisplay}>C</button>
                <button className="button" onClick={() => appendToDisplay('+')}>+</button>
            </div>
            <div className="button-row">
                <button id="calculate" className="button" onClick={calculate}>=</button>
            </div>
        </div>
    );
}

export default Calculator;
