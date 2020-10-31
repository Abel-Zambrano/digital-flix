import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  const [ movies, setMovies ] = useState([]);
  const [title, setTitle] = useState("");

  const access = 'b495b08d'

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${access}&t=star+wars`)
    .then(res => {
      setMovies(res.data)
      setTitle(res.data.Title)
    })
  }, []);

  console.log(movies);
  
  console.log(title);
  
  

  return (
    <div className="App">
      <Header/>
      <Form />
      <div className="container">
        <Movie 
        title={movies.Title}
        about={movies.Plot}
        image={movies.Poster}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
