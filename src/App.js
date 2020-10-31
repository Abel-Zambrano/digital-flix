import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Movie from './components/Movie';

function App() {
  const [ movies, setMovies ] = useState([]);
  const [title, setTitle] = useState("");

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
      <Movie 
      title={movies.Title}
      about={movies.Plot}
      image={movies.Poster}
      />
    </div>
  );
}

export default App;
