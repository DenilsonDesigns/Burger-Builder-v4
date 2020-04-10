import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </>
  );
}
