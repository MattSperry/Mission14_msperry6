import React, { useEffect, useState } from 'react';
import { Movie } from './movie';

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://localhost:4000/Movie');
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  // Filter and sort movies
  const editedMovies = movies
    .filter((movie) => movie.edited) // Filter only edited movies
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title

  return (
    <>
      <div>
        <h4>Joel Hilton's Movies!</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {editedMovies.map((movie) => (
            <tr key={movie.movieId}>
              <td>{movie.category}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.director}</td>
              <td>{movie.rating}</td>
              <td>{movie.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
