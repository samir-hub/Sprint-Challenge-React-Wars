import React, {useEffect, useState} from 'react';
import './App.scss';
import StarWarsCard from "./components/StarWarsCard"
import axios from "axios";
import './index.scss';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  let api = `https://swapi.co/api/people`

  useEffect(() => {
    axios
      .get(api)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
  }, []);

  return (<>
    <div className="App">
    <h1 className="Header">React Wars</h1>
    </div>
    {
      data.map((ele)=>{
        return <StarWarsCard name = {ele.name} birth = {ele.birth_year} gender = {ele.gender} hair = {ele.hair_color} eyes = {ele.eye_color}/>

      })
    }

</>
  );
}

export default App;
