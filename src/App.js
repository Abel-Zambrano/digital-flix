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
  

  const access = 'b495b08d'
  // API ========================================================================
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${access}&s=shrek`)
    .then(res => {
      console.log(res);
      
      setMovies(res.data.Search)

    })
  }, []);

  console.log(movies);
  
  // Event Handler ================================================================
  const searchInputHandler = ((event) => {
    
  })

  return (
    <div className="App">
      <Header/>
      <Form 
      title={movies?.[0]?.Title}
      search={(event) => searchInputHandler(event, movies?.[0]?.Title)}
      />
      <div className="container">
        <Movie 
        title={movies?.[0]?.Title}
        image={movies?.[0]?.Poster}
        year={movies?.[0]?.Year}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
