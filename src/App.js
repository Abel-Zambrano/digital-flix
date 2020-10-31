import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ movies, setMovies ] = useState([]);

  const access = 'b495b08d'

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${access}&t=star+wars`)
    .then(res => {
      setMovies(res.data)
    })
  }, []);

  console.log(movies);
  

  return (
    <div className="App">
      <h1>Digital Flix</h1>
      <div>
        <h2>{movies.Title}</h2>
        <h5>{movies.Plot}</h5>
        <img src={movies.Poster} alt="" />
      </div>
    </div>
  );
}

export default App;
