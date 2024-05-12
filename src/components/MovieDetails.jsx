// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4055b791708338774332fbeb5d716522`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>({new Date(movieDetails.release_date).getFullYear()})</p>
      <p>User Score: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />

      <div>
        <button onClick={toggleCast}>Cast</button>
        <button onClick={toggleReviews}>Reviews</button>
      </div>

      {showCast && <Cast movieId={movieId} />}
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
}

export default MovieDetails;
