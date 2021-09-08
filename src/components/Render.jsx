const RenderJS = () => {
  const notes = [
    {
      id: 1,
      conter: "html is easy",
      date: "109-28-82",
      state: true,
      color: "blue",
    },
    {
      id: 2,
      conter: "browser is JavaScript",
      date: "928-89-78",
      state: true,
    },
    {
      id: 3,
      conter: "vue is beautiful and React to",
      date: "13-849-89",
      state: false,
      color: "red",
    },
  ];
  const CardNote = ({ note }) => {
    return (
      <div key={note.date}>
        <h4 style={{ color: note.color }}>{note.conter}</h4>
        <span>{note.id} </span>
        <p>{note.date}</p>
        <h5>{note.state ? "hola soy importate" : "no soy importante"}</h5>
        <hr />
      </div>
    );
  };
  return (
    <div>
      <h2>Renderizado de Listado y Formularios</h2>
      {
        typeof notes === "undefined"
          ? "the value is undefined or null"
          : notes.map((note) => <CardNote note={note} />)
        // notes.map(({ id, conter, date, state, color }) => (
        //     <div key={date}>
        //       <h4 style={{ color: color }}>{conter}</h4>
        //       <span>{id} </span>
        //       <p>{date}</p>
        //       <h5>{state ? "hola soy importate" : "no soy importante"}</h5>
        //       <hr />{" "}
        //     </div>
        //   ))
      }
    </div>
  );
};

export default RenderJS;
