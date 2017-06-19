import React from "react";
import "./Layout.less";

function Layout() {
  return(
    <div className="adyax-layout">
        <h1 className="adyax-title">
          {"Adyax"}
          <span className="yellow-font">{"."}</span>
        </h1>
        <p className="adyax-tagline">{"a better experiance"}</p>
        <p className="adyax-developer">{"Front-End develper"}</p>
        <p className="adyax-coreValues">
          {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae cumque eligendi enim excepturi quasi voluptatum. Debitis ex incidunt quas."}
        </p>
    </div>
  );
}

export default Layout;