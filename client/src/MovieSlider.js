import React from "react";
import Slider from "react-slick";
import TextEllipsis from "react-text-ellipsis";

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET,
  REACT_APP_ACCESS_TOKEN
} = process.env;

var Vimeo = require("vimeo").Vimeo;
var client = new Vimeo(
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET,
  REACT_APP_ACCESS_TOKEN
);

export default class MovieSlider extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    console.log(this.props.history);

    client.request(
      {
        path: "/channels/staffpicks/videos",
        query: {
          page: 2,
          per_page: 10,
          fields: "name,description,link,pictures"
        }
      },
      (error, body, status_code, headers) => {
        if (error) {
          console.log("error");
          console.log(error);
        } else {
          console.log("body");
          console.log(body);
          this.setState({ data: body.data });
        }

        console.log("status code");
        console.log(status_code);
        console.log("headers");
        console.log(headers);
      }
    );
  }
  render() {
    let { data } = this.state;
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 350,
      easing: "cubic",
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false
    };
    if (data.length <= 0) {
      return (
        <Slider {...settings}>
          <p className="loading">Loading...</p>
        </Slider>
      );
    }
    return (
      <Slider {...settings}>
        {data.map(({ name, description, link, pictures: { sizes } }, i) => (
          <div className="movie-item-container">
            <img class="movie-background" src={sizes[7].link} />
            <div className="movie-item">
              <div className="movie-image">
                <img src={sizes[7].link} />
              </div>
              <div className="caption">
                <a href={link}>
                  <h2 className="title">{name}</h2>
                </a>
                <TextEllipsis
                  className="description"
                  lines={4}
                  tag={"p"}
                  ellipsisChars={"..."}
                  tagClass={"className"}
                  debounceTimeoutOnResize={200}
                  useJsOnly={true}
                >
                  {description}
                </TextEllipsis>
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
