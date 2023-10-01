import { useState } from "react";
import "./App.css";
import Edit from "./Edit";

function App() {
  // eslint-disable-next-line no-undef
  const [soniyaAccount, setAccountBalance] = useState(1000);
  let nums = [1, 2, 3, 4];
  return (
    <div className="App">
      <header className="App-header">
        <label>
          Available Balance : {soniyaAccount}
          <input
            type="text"
            value={soniyaAccount}
            onChange={(e) => setAccountBalance(e.target.value)}
          />
        </label>
        {nums.map((num) => (
          <Edit number={num} />
        ))}
        {/* <Edit number="1" />
        <Edit number="2" />
        <Edit number="3" />
        <Edit number="4" /> */}
      </header>
    </div>
  );
}

export default App;
