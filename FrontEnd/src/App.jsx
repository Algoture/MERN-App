import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jokes")
      .then((res) => {
        setData(res.data);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>This is a React App</h1>
      <h2>Here is a joke for you:</h2>
      <p>{load ? data : "Loading..."}</p>
    </>
  );
}

export default App;
