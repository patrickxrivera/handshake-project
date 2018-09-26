import React, { Component } from 'react';
import { string, func, arrayOf, shape, number } from 'prop-types';
import { connect } from 'react-redux';

import { selectAlarms, selectVotes } from '../../reducers/alarms';
import { getAlarms, createAlarm, addUpvote, addDownvote } from '../../actions/alarms';
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
    const { alarms, votes, addUpvote, addDownvote } = this.props;

    return (
      <HomeBranch
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        alarms={alarms}
        addUpvote={addUpvote}
        addDownvote={addDownvote}
        votes={votes}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  alarms: selectAlarms(state),
  votes: selectVotes(state)
});

HomeContainer.propTypes = {
  alarms: arrayOf(
    shape({
      _id: string.isRequired,
      text: string.isReqiured
      // TODO:
      // ADD created_at
    })
  ),
  getAlarms: func.isRequired,
  createAlarm: func.isRequired
};

export default connect(mapStateToProps, { getAlarms, createAlarm, addUpvote, addDownvote })(
  HomeContainer
);
