// Home.js

import React from "react";
import Image from "react-bootstrap/Image";

import Stream from "./Stream";

const theOneFunc = delay => {
  console.log("Hello after " + delay + " seconds");
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentState;

    // console.log("Home constructor");
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        {/*  <Image src="./img/ME_ID_Eclipse_loop1.gif" fluid /> */}
        <Stream currentState={this.state} />
      </div>
    );
  }
}
export default Home;
