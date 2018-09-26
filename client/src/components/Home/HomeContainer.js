import React, { Component } from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

import { selectAlarms } from '../../reducers/alarms';
import { getAlarms, createAlarm } from '../../actions/alarms';
import { HomeBranch } from './';
import { isValid } from './helpers';

class HomeContainer extends Component {
  state = {
    value: ''
  };

  componentDidMount = async () => {
    // const res = this.props.getAlarms();
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
      // <HomeBranch
      //   {...this.state}
      //   handleSubmit={this.handleSubmit}
      //   handleInputChange={this.handleInputChange}
      //   restaurants={this.props.restaurants}
      // />
      <div>Hi</div>
    );
  }
}

const mapStateToProps = (state) => ({
  alarms: selectAlarms(state)
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

export default connect(mapStateToProps, { getAlarms, createAlarm })(HomeContainer);
