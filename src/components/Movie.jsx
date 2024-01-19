import style from "../styles/style.module.css";

// Functional component to display individual movie details
const Movie = (props) => {
  // Destructuring props to extract movie details
  const { title, year, director, poster, genre } = props;

  return (
    // Movie card container with styling from style.module.css
    <div className={style["movie-card"]}>
      {/* Image of the movie */}
      <img src={poster} alt={title} />
      {/* Title of the movie */}
      <h3>{title}</h3>
      {/* Movie information container */}
      <div className={style["movie-info"]}>
        {/* Director and Year information */}
        <p>{director}</p>
        <p>{year}</p>
      </div>
      {/* Genre information */}
      <p>{genre}</p>
    </div>
  );
};

export default Movie;
