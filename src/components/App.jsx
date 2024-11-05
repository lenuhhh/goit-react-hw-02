import { useState, useEffect } from 'react'
import './App.css';
import Description from './Description/Description.jsx';
import Feedback from './Feedback/Feedback.jsx';
import Options from './Options/Options.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 }
  );

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
     <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onResetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          total={totalFeedback}
          positivePercentage={positiveFeedback}
          stats={feedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;