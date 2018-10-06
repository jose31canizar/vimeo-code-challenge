import React, { Component } from "react";
import "./App.css";
import MovieSlider from "./MovieSlider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieSlider />
        <main>
          <section>
            <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg" />
            <div>
              <h2>MONSOON III</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies mi nec elit pretium porta. Ut pellentesque mollis
                magna et molestie. In elementum nulla vel augue tempor non
                ultrices mauris semper.
              </p>
            </div>
          </section>
          <section>
            <div>
              <h2>BEAMS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies mi nec elit pretium porta. Ut pellentesque mollis
                magna et molestie. In elementum nulla vel augue tempor non
                ultrices mauris semper.
              </p>
            </div>
            <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg" />
            <div>
              <h2>Move 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ultricies mi nec elit pretium porta. Ut pellentesque mollis
                magna et molestie. In elementum nulla vel augue tempor non
                ultrices mauris semper.
              </p>
            </div>
            <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
