import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import Template from "./Template";

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Template>
      <App/>
    </Template>
  );
}