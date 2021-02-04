import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addBird, incrementBird } from "./features/birdReducerActions";
import "./App.css";

function App() {
  console.log("In the app.js");
  const listOfBirds = useSelector((state) => state.birds.listOfBirds);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const renderBirds = listOfBirds.map(({ name, views }, index) => {
    return (
      <div key={index}>
        <h1>{name}</h1>
        <h3>{views}</h3>
        <button onClick={() => dispatch(incrementBird(name))}>Add view</button>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Birds</h1>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="BirdName"
        value={search}
      />
      <button onClick={() => dispatch(addBird({ name: search, views: 1 }))}>
        Add Bird
      </button>
      {renderBirds}
    </div>
  );
}

export default App;
