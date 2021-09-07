import { useState } from "react";

const Acount = () => {
  const [cont, setCont] = useState(1);

  const reasingCont = () => {
    setCont(cont + 1);
  };
  const degradeCont = () => {
    setCont(cont - 1);
  };
  // const ret = ()=>{
  // ret  ? setCont(cont + 1) : setCont(cont - 1)
  // }
  const isEven = cont % 2 === 0;
  return (
    <div>
      <h3>contador</h3>
      <h2>{cont}</h2>
      <h3>{isEven ? "es Par" : "es impar "}</h3>
      <button onClick={reasingCont}>Aumentor uno al contador</button>
      <button onClick={degradeCont}>Restar uno al contador</button>
    </div>
  );
} ;

export default Acount;
