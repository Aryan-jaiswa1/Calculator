import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './index.css';

const Calculator = () => {
  const [output, setOutput] = useState('');
  const [isRadians, setIsRadians] = useState(false);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setOutput('');
    } else if (value === '=') {
      try {
        const result = evaluate(output.replace(/x/g, '*').replace(/÷/g, '/'));
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === '<=') {
      setOutput(output.slice(0, -1));
    } else if (value === 'π') {
      setOutput(output + Math.PI);
    } else if (value === 'sqrt') {
      try {
        const result = Math.sqrt(evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')));
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'sq') {
      try {
        const result = Math.pow(evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')), 2);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'log') {
      try {
        const result = Math.log10(evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')));
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'ln') {
      try {
        const result = Math.log(evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')));
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'sin') {
      try {
        const angle = isRadians ? evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')) : (evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')) * Math.PI) / 180;
        const result = Math.sin(angle);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'cos') {
      try {
        const angle = isRadians ? evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')) : (evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')) * Math.PI) / 180;
        const result = Math.cos(angle);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'tan') {
      try {
        const angle = isRadians ? evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')) : (evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')) * Math.PI) / 180;
        const result = Math.tan(angle);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'n!') {
      const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
      try {
        const result = factorial(evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')));
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'exp') {
      try {
        const result = Math.exp(evaluate(output.replace(/x/g, '*').replace(/÷/g, '/')));
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'radians') {
      setIsRadians(true);
    } else if (value === 'degrees') {
      setIsRadians(false);
    } else {
      setOutput(output + value);
    }
};

  const renderButton = (label, className) => (
    <div className={`button ${className}`} onClick={() => handleButtonClick(label)}>
      {label}
    </div>
  );

  return (
      <div className="calculator">
        <div className="display">
          <input id="output" type="text" value={output} disabled />
        </div>
        <div id="buttons">
          <div className="row">
            {renderButton('C', 'clear')}
            {renderButton('π', 'pi')}
            {renderButton('sqrt', 'sqrt')}
            {renderButton('sq', 'square')}
            {renderButton('%', 'percent')}
            {renderButton('<=', 'backspace')}
          </div>
          <div className="row">
            {renderButton('log', 'log')}
            {renderButton('sin', 'sin')}
            {renderButton('exp', 'exp')}
            {renderButton('^', 'power')}
            {renderButton('+/-', 'negate')}
            {renderButton('÷', 'divide')}
          </div>
          <div className="row">
            {renderButton('ln', 'ln')}
            {renderButton('cos', 'cos')}
            {renderButton('7', 'number')}
            {renderButton('8', 'number')}
            {renderButton('9', 'number')}
            {renderButton('x', 'multiply')}
          </div>
          <div className="row">
            {renderButton('n!', 'factorial')}
            {renderButton('tan', 'tan')}
            {renderButton('4', 'number')}
            {renderButton('5', 'number')}
            {renderButton('6', 'number')}
            {renderButton('-', 'subtract')}
          </div>
          <div className="row">
            {renderButton('radians', 'radians')}
            {renderButton('1', 'number')}
            {renderButton('2', 'number')}
            {renderButton('3', 'number')}
            {renderButton('+', 'add')}
          </div>
          <div className="row">
            {renderButton('degrees', 'degrees')}
            {renderButton('0', 'zero')}
            {renderButton('.', 'decimal')}
            {renderButton('=', 'equals')}
          </div>
        </div>
      </div>
  );
};

export default Calculator;
