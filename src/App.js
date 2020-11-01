import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  // State ======================================================================
  const [ movies, setMovies ] = useState([]);
  const [search, setSearch] = useState('');

  // API ========================================================================
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_SECRET_KEY}&s=${search}`)
    .then(res => {
      setMovies(res.data.Search)

    })
  }, [search]);

  console.log(movies);

  // Event Handler ================================================================
  const searchInputHandler = ((event) => {
    setSearch(event.target.value);
  });

  console.log(search);
  

  // Render =======================================================================
  return (  
    <div className="App">
      <Header/>
      <Form 
      title={movies?.[0]?.Title}
      search={searchInputHandler}
      />
    <div className="container">
      {movies?.map((movie) => {
          return <Movie
          key={movie?.imdbID}
          id={movie?.imdbID} 
          title={movie?.Title}
          image={movie?.Poster}
          year={movie?.Year}
          />
        })}
    </div>
      <Footer />
    </div>
  );
}

export default App;
