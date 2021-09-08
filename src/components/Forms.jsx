import React, { useState } from "react";
const Forms = (props) => {
  // const [note, setNote] = useState();
  const { id, color, date, conter } = props;
  return (
    <div className="Forms__cotent">
      <li style={{ color: color }}>
        <p>
          <strong>{id}:</strong>
          <small>{conter}</small>
          <time>{date}___</time>
        </p>
      </li>
    </div>
  );
};

export default Forms;
