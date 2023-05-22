import React from 'react';
import { FeedbackMarkup } from './FeedbackMarkup/FeedbackMarkup';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  handleClick = ({ target }) => {
    this.setState(prevState => ({
      [target.name]: prevState[target.name] + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackMarkup
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback()}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
