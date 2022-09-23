import React, { useState } from 'react';
import styles from "../styles/Calculator.module.css";

const Calculator:React.FC = () => {
    const [[num1, setNum1], [num2, setNum2]] = [useState("0"), useState("0")];
    const [result, setResult] = useState(NaN);

    function Calculate(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        switch ((e.target as HTMLButtonElement).textContent) {
            case "+":
                setResult(parseFloat(num1.replaceAll(",", ".")) + parseFloat(num2.replaceAll(",", ".")));
                break;
            case "-":
                setResult(parseFloat(num1.replaceAll(",", ".")) - parseFloat(num2.replaceAll(",", ".")));
                break;
            case "*":
                setResult(parseFloat(num1.replaceAll(",", ".")) * parseFloat(num2.replaceAll(",", ".")));
                break;
            case "/":
                setResult(parseFloat(num1.replaceAll(",", ".")) / parseFloat(num2.replaceAll(",", ".")));
                break;
        
            default:
                setResult(0);
                break;
        }
    }

  return (
    <div className={styles.container}>
        <h1>Calculator</h1>
        <div className={styles.txtBoxes}>
            <input type="text" placeholder="Number 1" value={num1} onChange={(e) => {
                setNum1(e.target.value)
            }}/>
            <input type="text" placeholder="Number 2" value={num2} onChange={(e) => {
                setNum2(e.target.value)
            }}/>
        </div>
        <div className={styles.buttons}>
            <button onClick={Calculate}>+</button>
            <button onClick={Calculate}>-</button>
            <button onClick={Calculate}>*</button>
            <button onClick={Calculate}>/</button>
        </div>
        <span>{result.toString() != "NaN" ? result.toString() : ""}</span>
    </div>
  );
};

export default Calculator;