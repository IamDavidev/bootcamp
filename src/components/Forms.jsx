// import React, { useState } from "react";
const Forms = (props) => {
  // const [note, setNote] = useState();
  const { color, date, conter } = props;
  return (
    <div className="Forms__cotent">
      <li style={{ color: color }}>
        <p>
          <strong>{conter}</strong>
        </p>
        <time>{date}</time>
      </li>
    </div>
  );
};

export default Forms;
