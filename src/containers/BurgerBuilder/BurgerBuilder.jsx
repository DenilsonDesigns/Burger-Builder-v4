import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 0,
      cheese: 2,
      meat: 3,
    },
  };
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </>
    );
  }
}
