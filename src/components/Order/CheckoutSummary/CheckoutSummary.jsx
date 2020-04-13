import React from "react";
import "./CheckoutSummary.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

export default function CheckoutSummary(props) {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes great!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">CANCEL</Button>
      <Button btnType="Success">CONTINUE</Button>
    </div>
  );
}
