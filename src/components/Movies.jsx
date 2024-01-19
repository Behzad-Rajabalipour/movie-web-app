import React, { Component } from "react";
import style from "../styles/style.module.css";
import axios from "axios";
import Movie from "./Movie";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      movies: [],
      genres: [],
      genreFilter: [],
      searchTitle: "",
    };
  }

  // Handling changes in the search input
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      movies: this.state.allMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  // Fetching data from the movies.json file
  componentDidMount() {
    axios.get("./movies.json").then((response) => {
      this.setState(
        {
          allMovies: response.data,
          movies: response.data,
        },
        () => {
          var temp = [];
          // Extracting unique genres from the movies
          this.state.allMovies.map((movie) => {
            const Genres_arr = movie.Genre.split(", ");
            Genres_arr.map((genre) => {
              if (temp.indexOf(genre) === -1)
                temp.push(genre);
            });
          });
          this.setState({ genres: temp });
        }
      );
    });
  }

  // Adding or removing genres from the filter
  addOrRemoveGenre(genre) {
    var index = this.state.genreFilter.indexOf(genre);
    if (index === -1) {
      this.state.genreFilter.push(genre);
    } else {
      this.state.genreFilter.splice(index, 1);
    }
    console.log(this.state.genreFilter);
  }

  // Filtering movies based on selected genres
  filterByGenreHandler = (genre) => {
    this.addOrRemoveGenre(genre);

    let temp = [];
    this.state.genreFilter.map((genre) => {
      const selMovies = this.state.allMovies.filter((movie) =>
        movie.Genre.includes(genre)
      );

      selMovies.map((movie) => {
        if (temp.indexOf(movie) === -1)
          temp.push(movie);
      });
    });

    if (temp.length === 0)
      this.setState({
        movies: this.state.allMovies
      });
    else {
      this.setState({
        movies: temp,
      });
    }
  };

  // Checking if a genre is active in the filter
  activeHandler = (curGenre) => {
    var flag = false;
    this.state.genreFilter.map((genre) => {
      if (genre === curGenre) {
        flag = true;
      }
    });
    return flag;
  };

  resetHandler = () => {
    window.location.reload();
  };

  render() {
    return (
      <>
        <div className={style["container"]}>
          <div className={style["movies-container"]}>
            {this.state.movies.map((movie) => (
              <Movie
                key={movie.Id}
                title={movie.Title}
                year={movie.Year}
                director={movie.Director}
                poster={movie.Poster}
                genre={movie.Genre}
              />
            ))}
          </div>

          <div className={style["sidebar"]}>
            {/* Search input for filtering movies by title */}
            <input
              type="text"
              placeholder="search by movie Title"
              className={style["search-input"]}
              name="searchTitle"
              value={this.state.searchTitle}
              onChange={this.changeHandler}
            />
            {/* Displaying buttons for each genre */}
            {this.state.genres.map((genre, index) => (
              <button
                key={index}
                className={`${style[`btn-filter`]} ${this.activeHandler(genre) && style[`colored`]}`}
                onClick={() => this.filterByGenreHandler(genre)}
              >
                {genre}
              </button>
            ))}
            <br />
            {/* Button to reset the page */}
            <button onClick={this.resetHandler}>Reset</button>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
