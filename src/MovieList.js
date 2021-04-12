import MovieCard from "./MovieCard";
import { Button } from "react-bootstrap";
import { useState } from "react";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MovieList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <Button onClick={handleShow} className="btn-add">
          Add Movie
        </Button>
      </div>
      <AddMovie show={show} handleClose={handleClose} addMovie={addMovie} />

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
