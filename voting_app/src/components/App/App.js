import React, { Component } from "react";
import ProductList from "../ProductList/ProductList";

class App extends Component {
  render() {
    return (
      <div class="main ui text container">
        <h1 class="ui dividing centered header">Popular Products</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
