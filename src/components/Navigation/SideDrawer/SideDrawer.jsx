import React from "react";
import "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default function SideDrawer(props) {
  let attachedClasses = ["SideDrawer", "Closed"].join(" ");
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"].join(" ");
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className="Logo-SideDrawer">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
}
