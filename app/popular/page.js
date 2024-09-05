'use client';
import { useState, useEffect } from 'react';
import './popular.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';  

const API_KEY = '1cf50e6248dc270629e802686245c2c8'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

export default function Home() {
  const [movies, setMovies] = useState([]);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    fetchMovies();
  }, []);


  const fetchMovies = async () => {
    try {
      const response = await fetch(POPULAR_MOVIES_URL);
      if (!response.ok) {
        throw new Error('Error fetching movies');
      }
      const data = await response.json();
      setMovies(data.results || []); 
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Unable to fetch movies at this time.');
    }
  };

  return (
    <>
      {/* Título de la sección */}
      <h1 style={{ textAlign: 'center', margin: '20px 0', fontSize: '2.5rem' }}>
      The most popular movies</h1>

      {/* Sección de películas */}
      <main id="main">
        <div className="movies-grid">
          {error ? (
            <p>{error}</p>  
          ) : movies.length > 0 ? (
            movies.map(movie => (
              <div key={movie.id} className="movie-card">
                <img src={`${IMG_URL}/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>
                Release date: {movie.release_date}</p>

                {/* Mostrar el porcentaje de calificación */}
                <div className="rating">
                  <span>{Math.round(movie.vote_average * 10)}%</span> {/* Mostrar porcentaje */}
                </div>
              </div>
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </main>
    </>
  );
}
