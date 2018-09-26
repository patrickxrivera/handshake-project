import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectRestaurants } from '../../reducers/restaurants';
import { fetchRestaurants, createRestaurant } from '../../actions/restaurants';
import { HomeBranch } from './';

const isValid = (value) => value;

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

export default connect(mapStateToProps, { fetchRestaurants, createRestaurant })(HomeContainer);
