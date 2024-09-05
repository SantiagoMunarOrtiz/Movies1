'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import './styles/globals.css';
import '../components/hero/css.css';
import '../components/navbar/navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const API_KEY = 'TU_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';
const searchURL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFavorite = (movie) => {
    if (favorites.some(fav => fav.id === movie.id)) {
      setFavorites(favorites.filter(fav => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Error fetching movies');
      }
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      setError('Unable to fetch movies at this time.');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${searchURL}&query=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Error searching movies');
      }
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      setError('Unable to find movies at this time.');
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <>
      <Script src="/script.js" strategy="lazyOnload" />

      <nav className="navbar">
        <div className="navbar__brand">
          <h1>Quickbet Movies</h1>
        </div>
        <ul className="navbar__links">
          <li><a href="popular">Popular</a></li>
          <li><a href="favorites">Favorites</a></li>
        </ul>
        <div className="navbar__profile">
          <a href="#" onClick={openModal}><i className="fas fa-user-circle"></i></a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover the Best Movies</h1>
          <p>Explore popular movies, add them to your favorites, and enjoy personalized recommendations.</p>
          <div className="hero-buttons">
            <a href="#" className="button">Watch Now</a>
            <a href="#" className="button">Add to Favorites</a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form className="login-form">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" required />
              <button type="submit" className="modal-login-button">Login</button>
            </form>
            <p>Dont have an account? <a href="#">Register</a></p>
          </div>
        </div>
      )}

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div id="tags"></div>
      <main id="main">
        <div className="movies-grid">
          {error ? (
            <p>{error}</p>
          ) : movies.length > 0 ? (
            movies.map(movie => (
              <div key={movie.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>

                <i 
                  className={`fas fa-heart ${favorites.some(fav => fav.id === movie.id) ? 'favorited' : ''}`} 
                  onClick={() => toggleFavorite(movie)}
                ></i>

                <div className="rating">
                  <span>{Math.round(movie.vote_average * 10)}%</span>
                </div>
              </div>
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </main>

      <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content" id="overlay-content"></div>
        <a href="javascript:void(0)" className="arrow left-arrow" id="left-arrow">&#8656;</a>
        <a href="javascript:void(0)" className="arrow right-arrow" id="right-arrow">&#8658;</a>
      </div>

      <div className="pagination">
        <div className="page" id="prev">Previous Page</div>
        <div className="page" id="next">Next Page</div>
      </div>
    </>
  );
}
