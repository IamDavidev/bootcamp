import { useState } from "react";

const Acount = () => {
  const [cont, setCont] = useState(0);

  const reasingCont = () => {
    setCont(cont + 1);
  };
  const degradeCont = () => {
    setCont(cont - 1);
  };
  return (
    <div>
      <h3>contador</h3>
      <p>{cont}</p>
      <button onClick={reasingCont}>Aumentor uno al contador</button>
      <button onClick={degradeCont}>Restar uno al contador</button>
    </div>
  );
};

export default Acount;
