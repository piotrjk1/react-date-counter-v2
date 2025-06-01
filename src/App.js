import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <p>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `It will be ${date.toDateString()}`
            : `It was ${date.toDateString()}`}
        </p>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button
            onClick={() => {
              setStep(1);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
