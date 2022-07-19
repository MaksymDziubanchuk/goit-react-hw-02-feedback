import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <button
      className={css.btn}
      onClick={e => {
        options(e);
        onLeaveFeedback();
      }}
    >
      Good
    </button>
    <button
      className={css.btn}
      onClick={e => {
        options(e);
        onLeaveFeedback();
      }}
    >
      Neutral
    </button>
    <button
      className={css.btn}
      onClick={e => {
        options(e);
        onLeaveFeedback();
      }}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.elementType.isRequired,
  onLeaveFeedback: PropTypes.elementType.isRequired,
};
