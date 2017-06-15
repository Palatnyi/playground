import React, {PureComponent} from "react";

class App extends PureComponent {
  componentWillMount() {
    // console.log(window);
  }
  componentDidMount() {
    console.log(window);
  }
  render() {
    return (
      <div id="app">
        {"hello world from server"}
        {typeof window === "object" ? "YES to client side rendering" : "NO to client side rendering"}
      </div>
    );
  }
}

export default App;