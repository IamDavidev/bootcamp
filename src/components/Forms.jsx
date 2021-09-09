const Forms = (props) => {
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
