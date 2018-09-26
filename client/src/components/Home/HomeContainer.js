import React, { Component } from 'react';
import { string, func, arrayOf, shape, number } from 'prop-types';
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
    this.props.getAlarms();
  };

  handleSubmit = () => {
    const { value } = this.state;

    if (isValid(value)) {
      this.props.createAlarm(value);
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
        alarms={this.props.alarms}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  alarms: selectAlarms(state)
});

HomeContainer.propTypes = {
  alarms: arrayOf(
    shape({
      _id: string.isRequired,
      text: string.isReqiured,
      upvotes: number.isRequired
      // TODO:
      // ADD created_at
    })
  ),
  getAlarms: func.isRequired,
  createAlarm: func.isRequired
};

export default connect(mapStateToProps, { getAlarms, createAlarm })(HomeContainer);
