import { useRef, useState } from "react";

const Calculator = () => {
  const inputRef = useRef(null);
  const [history, setHistory] = useState([]); // Guarda los resultados
  const [currentOperation, setCurrentOperation] = useState(null); // Almacena la operación
  const [firstNumber, setFirstNumber] = useState(null); // Guarda el primer número
  const [lastResult, setLastResult] = useState(null); // Último resultado

  const handleOperation = (operation) => {
    const num = parseFloat(inputRef.current.value);
    if (!isNaN(num)) {
      setFirstNumber(num);
      setCurrentOperation(operation);
      inputRef.current.value = ""; // Limpia el input para el segundo número
    }
  };

  const calculateResult = () => {
    const num2 = parseFloat(inputRef.current.value);
    if (firstNumber === null || isNaN(num2)) return;

    let result;
    switch (currentOperation) {
      case "sum":
        result = firstNumber + num2;
        break;
      case "subtract":
        result = firstNumber - num2;
        break;
      case "multiply":
        result = firstNumber * num2;
        break;
      case "divide":
        result = num2 !== 0 ? firstNumber / num2 : "Error (División por 0)";
        break;
      default:
        return;
    }

    const updatedHistory = [...history, result].sort((a, b) => a - b);
    setHistory(updatedHistory);
    setLastResult(result);
    setFirstNumber(null);
    setCurrentOperation(null);
    inputRef.current.value = ""; // Limpia el input
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input type="number" ref={inputRef} placeholder="Introduce un número" />
      <div>
        <button onClick={() => handleOperation("sum")}>+</button>
        <button onClick={() => handleOperation("subtract")}>-</button>
        <button onClick={() => handleOperation("multiply")}>*</button>
        <button onClick={() => handleOperation("divide")}>/</button>
        <button onClick={calculateResult}>=</button>
      </div>
      <h3>Último resultado: {lastResult !== null ? lastResult : "N/A"}</h3>
      <h3>Histórico de resultados:</h3>
      <ul>
        {history.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
