import React from "react";
import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function DonationForm(props) {
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [donors, setDonors] = useState(0);
  const [goal, setGoal] = useState(0);

  const MessageTooltip = () => {
    return (
      <span style={{ color: "red" }}>
        {5000 - amount} still needed until we reach the goal
      </span>
    );
  };

  function handleChange(event) {
    setValue(parseInt(event.target.value));
  }

  function handleClick() {
    setAmount(amount + value);
    setValue(0);
    setDonors(donors + 1);
    setGoal(5000);
  }
  return (
    <div>
      <div className="form-child">
        <Tippy content={<MessageTooltip></MessageTooltip>}>
          <ProgressBar now={amount} max={goal} />
        </Tippy>
        <h2>Only four days left to fund this project</h2>
        <p>
          join the {donors} other donors who have already supported the Project!
        </p>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          placeholder="$5 min"
        />
        <button onClick={handleClick}>Give Now</button>
      </div>
    </div>
  );
}

export default DonationForm;