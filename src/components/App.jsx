import React from 'react';
import { FeedbackMarkup } from './FeedbackMarkup/FeedbackMarkup';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    this.props.total = this.props.total + 1;
  };

  handleClick = ({ target }) => {
    this.setState(
      prevState => ({
        [target.name]: prevState[target.name] + 1,
      }),
      this.countTotalFeedback
    );
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
        <FeedbackMarkup total={0} />
      </div>
    );
  }
}
