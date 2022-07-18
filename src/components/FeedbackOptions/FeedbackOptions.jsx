import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div onClick={onLeaveFeedback}>
    <button onClick={options}>Good</button>
    <button onClick={options}>Neutral</button>
    <button onClick={options}>Bad</button>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.elementType.isRequired,
  onLeaveFeedback: PropTypes.elementType.isRequired,
};
