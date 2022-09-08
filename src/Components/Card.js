import React from "react";

export default function Card({ movie }) {
  return (
    <div className="Card">
      <div>Movie name :- {movie?.title}</div>
      <div>Realease date :- {movie?.date}</div>
      <div>Rating :- {movie?.rating}</div>
    </div>
  );
}
