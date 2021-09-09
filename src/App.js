import "./App.css";

// import RenderJS from "./components/Render";
import NavBar from "./components/NavBar";
import Fetch from './components/Fetch'
const App = () => {
/*  const notas = [
    {
      id: 1,
      conter: "html is easy",
      date: "109-28-82",
      state: false,
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
  ];*/


  return (
    <div className="App">
      <div className="App-navbar">
        <NavBar />
      </div>  
      <div className="App-header">
        <Fetch />
        {/* <RenderJS notes={notas} /> */}
      </div>
    </div>
  );
};
export default App;
