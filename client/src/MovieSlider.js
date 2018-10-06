import React from "react";
import Slider from "react-slick";

export default class MovieSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 350,
      easing: "cubic",
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    const images = Array(5)
      .fill()
      .map((v, i) => i + 1);
    return (
      <Slider {...settings}>
        {images.map((image, i) => (
          <div className="movie-item-container">
            <img
              class="movie-background"
              src={require(`./images/image${image}.jpg`)}
            />
            <div className="movie-item">
              <div className="movie-image">
                <img src={require(`./images/image${image}.jpg`)} />
              </div>
              <div className="caption">
                <h2 className="title">Nichst Passiert / A Decent Man</h2>
                <p className="description">
                  A swiss family takes a ski vacation and runs into trouble when
                  the father, the titular decent man, finds himself in a series
                  of moral quandaries.
                </p>
                <div className="caption-buttons">
                  <div className="caption-button buy-now">Buy Now</div>
                  <div className="caption-button trailer">Watch Trailer</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
