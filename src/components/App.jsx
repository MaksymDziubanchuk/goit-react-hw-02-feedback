import React, { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: '0%',
    leavedFeedback: false,
  };

  options = evt => {
    const option = evt.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({ total: prevState.total + 1 }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      const { good, total } = prevState;
      const percentage = (good / total) * 100;
      return { positivePercentage: `${Math.round(percentage)}%` };
    });
  };

  onLeaveFeedback = () => {
    this.setState(prevState => ({
      leavedFeedback: prevState.leavedFeedback
        ? prevState.leavedFeedback
        : !prevState.leavedFeedback,
    }));
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.state.leavedFeedback ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
