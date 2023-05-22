import React from 'react';

export const FeedbackMarkup = ({
  countTotalFeedback,
  handleClick,
  good,
  neutral,
  bad,
}) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul>
        <li>
          <button name="good" type="button" onClick={handleClick}>
            Good
          </button>
        </li>
        <li>
          <button name="neutral" type="button" onClick={handleClick}>
            Neutral
          </button>
        </li>
        <li>
          <button name="bad" type="button" onClick={handleClick}>
            Bad
          </button>
        </li>
      </ul>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {countTotalFeedback}</p>
        </li>
      </ul>
    </div>
  );
};
