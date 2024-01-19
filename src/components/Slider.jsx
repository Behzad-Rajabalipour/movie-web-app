import React, { Component } from "react";
import style from "../styles/style.module.css";
import pic1 from "../images/movie1.webp";
import pic2 from "../images/movie2.webp";
import pic3 from "../images/movie3.jpg";
import pic4 from "../images/movie4.webp";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  // Array of slide objects with image details
  slides = [
    { id: 1, src: pic1, alt: "Image 1" },
    { id: 2, src: pic2, alt: "Image 2" },
    { id: 3, src: pic3, alt: "Image 3" },
    { id: 4, src: pic4, alt: "Image 4" },
  ];

  // Handler for moving to the next slide
  nextSlideHandler = () => {
    this.setState((prevState) => ({
      slideIndex: (prevState.slideIndex + 1) % this.slides.length,
    }));
  };

  // Handler for moving to the previous slide
  prevSlideHandler = () => {
    this.setState((prevState) => ({
      slideIndex: (prevState.slideIndex - 1 + this.slides.length) % this.slides.length,
    }));
  };

  render() {
    return (
      <>
        {/* Container for the slider */}
        <div className={style["slider-container"]}>
          {/* Slider with images */}
          <div className={style["slider"]} style={{ width: "100%" }}>
            {/* Mapping through slides and rendering images */}
            {this.slides.map((slide) => (
              <img
                key={slide.id}
                src={slide.src}
                alt={slide.alt}
                className={
                  // Conditional class based on the active slide
                  this.state.slideIndex + 1 === slide.id
                    ? style["active"]
                    : style["deactive"]
                }
              />
            ))}
          </div>
          {/* Button to move to the previous slide */}
          <button className={style["prev-button"]} onClick={this.prevSlideHandler}>
            Previews
          </button>
          {/* Button to move to the next slide */}
          <button className={style["next-button"]} onClick={this.nextSlideHandler}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Slider;
