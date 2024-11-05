import s from './Feedback.module.css';

const Feedback = ({ total, positivePercentage, stats }) => (
  <div className={s.feedbackContainer}>
    <h2>Statistics</h2>
    <p className={s.feedbackMessage}>Good: {stats.good}</p>
    <p className={s.feedbackMessage}>Neutral: {stats.neutral}</p>
    <p className={s.feedbackMessage}>Bad: {stats.bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;
