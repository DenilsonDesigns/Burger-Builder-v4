import React from "react";

import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="Content">{props.children}</main>
    </>
  );
}
