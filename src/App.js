import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import images from "./images.json";
import Container from "./components/Container";

class App extends Component {
  state = {
    images,
    arrayId: [],
    status: "",
  }

  click = id => {
    const arrayId = this.state.arrayId;
    const array = this.state.images

    for (var i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * array.length);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };

    if (arrayId.includes(id)) {
      this.setState({ arrayId: [], status: "You lose" });
      for (var l = 12; l > 0; l--) {
        document.getElementById(l).checked = false;
      }
      return;
    }
    else {
      arrayId.push(id);
      this.setState({ images });
      const length = arrayId.length;
      for (var k = 1; k < length + 1; k++) {
        document.getElementById(k).checked = true;
      }
      if (length === 12) {
        this.setState({ status: "You Win!" });
      }
      return;
    }
  }

  render() {
    return (
      <Container>
        <Header>
          {this.state.status}
        </Header>
        <div>
          {
            this.state.images.map((card) => <Main
              id={card.id}
              key={card.id}
              image={card.image}
              onClick={this.click}
            />)
          }
        </div>
      </Container>
    );
  };
}

export default App;
