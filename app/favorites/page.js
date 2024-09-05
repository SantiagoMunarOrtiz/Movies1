'use client';
import { useState, useEffect } from 'react';
import './favorites.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';  

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
//storageee
  useEffect(() => {
  
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h1>Your Favorite Movies</h1>
      <div className="movies-grid">
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>

              {/* Mostrar el porcentaje de calificación */}
              <div className="rating">
                <span>{Math.round(movie.vote_average * 10)}%</span> 
              </div>
            </div>
          ))
        ) : (
          <p>You havent added any favorite movies yet.</p>
        )}
      </div>
    </div>
  );
}
