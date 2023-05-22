import React from 'react';

export class FeedbackMarkup extends React.Component {
  static props = {
    total: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button name="good" type="button" onClick={this.handleClick}>
              Good
            </button>
          </li>
          <li>
            <button name="neutral" type="button" onClick={this.handleClick}>
              Neutral
            </button>
          </li>
          <li>
            <button name="bad" type="button" onClick={this.handleClick}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p>Total: {this.props.total}</p>
          </li>
        </ul>
      </div>
    );
  }
}
