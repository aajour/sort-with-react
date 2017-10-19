import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as listActions from '../../actions/listActions';

class DropDown extends Component {
  render() {
    const { lettersSelected } = this.props;

    return (
      <div>
        <select onChange={lettersSelected}>
          <option value='all'>All</option>
          <option value='letter'>Letters</option>
          <option value='numbers'>Numbers</option>
        </select>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, listActions)(DropDown);
