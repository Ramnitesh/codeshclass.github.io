import { useEffect, useState } from "react";
import "../App.css";
import Edit from "../Edit";

function Home() {
  // eslint-disable-next-line no-undef
  const [soniyaAccount, setAccountBalance] = useState(1000);
  const [count, setCount] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  });

  let nums = [1, 2, 3, 4];
  return (
    <div className="App">
      <header className="App-header">
        <label>Your balance will be close in {count} seconds</label>
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

export default Home;
