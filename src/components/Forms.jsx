const Forms = (props) => {
  console.log(props);
  const { id, color, date, conter } = props;
  return (
    <div className="Forms__cotent">
      <li style={{ color: color }}>
        <p>{conter}</p>
        <small>
          <time>{date}</time>
        </small>
        <br />
        <strong> ... id : {id}</strong>
      </li>
    </div>
  );
};

export default Forms;
