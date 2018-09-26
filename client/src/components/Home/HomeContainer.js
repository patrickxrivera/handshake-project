import React, { Component } from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

import { selectRestaurants } from '../../reducers/restaurants';
import { fetchRestaurants, createRestaurant } from '../../actions/restaurants';
import { HomeBranch } from './';
import { isValid } from './helpers';

class HomeContainer extends Component {
  state = {
    value: ''
  };

  componentDidMount = () => {
    this.props.fetchRestaurants();
  };

  handleSubmit = () => {
    const { value } = this.state;

    if (isValid(value)) {
      this.props.createRestaurant(value);
      this.setState({ value: '' });
    }
  };

  handleInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <HomeBranch
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        restaurants={this.props.restaurants}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: selectRestaurants(state)
});

HomeContainer.propTypes = {
  restaurants: arrayOf(
    shape({
      _id: string.isRequired,
      name: string.isReqiured
    })
  ),
  fetchRestaurants: func.isRequired,
  createRestaurant: func.isRequired
};

export default connect(mapStateToProps, { fetchRestaurants, createRestaurant })(HomeContainer);
