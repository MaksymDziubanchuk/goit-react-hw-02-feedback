import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div onClick={onLeaveFeedback}>
    <button onClick={options}>Good</button>
    <button onClick={options}>Neutral</button>
    <button onClick={options}>Bad</button>
  </div>
);
