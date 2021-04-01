import React, { useState, useEffect } from "react";
import CancelRequest from "./CancelRequest";

function CallCancelComponent() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {toggle ? "Hide data" : "Display Data"}
      </button>
      {toggle && <CancelRequest />}
    </div>
  );
}

export default CallCancelComponent;
