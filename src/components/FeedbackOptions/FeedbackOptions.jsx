import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackOptions = ['Good', 'Neutral', 'Bad'];
  return (
    <ul className={css.list}>
      {feedbackOptions.map(item => (
        <li key={item}>
          <button
            className={css.btn}
            onClick={e => {
              options(e);
              onLeaveFeedback();
            }}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.elementType.isRequired,
  onLeaveFeedback: PropTypes.elementType.isRequired,
};
