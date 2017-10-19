import React, { Component } from 'react';
import DropDown from './dropDown/DropDown';
import List from './list/List';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Show: </h1>

        <DropDown />
        <List />

      </div>

    );
  }
}
export default App;
