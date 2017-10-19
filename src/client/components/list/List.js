import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '../listItem/ListItem';
import fixture from './listItemsFixtures';
import { wrapper } from '../../actions/listActions';

class List extends Component {
  render() {
    const { filteredData } = this.props;

    return (
      <div>
        <ul>
          {filteredData.map((x, index) => <ListItem data={x} key={index}/>)}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredData: state.dropDownReducer.filteredData
  };
};

export default connect(mapStateToProps , wrapper)(List);
