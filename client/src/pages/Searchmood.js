import React from "react";
import Slider from '../components/Slider';


class Searchmood extends React.Component {
  state = {
    value: ""
  }
  handleChange = (event, newValue) => {
    this.setState({value:newValue})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <center>
          <Slider
          handleChange={this.handleChange}
          value={this.state.value}
          />
        </center>
      </div>
    );
  }
}

export default Searchmood;