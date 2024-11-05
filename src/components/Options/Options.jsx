import s from './Options.module.css';

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => (
  <div className={s.optionsContainer}>
    <button className={`${s.button} ${s.goodButton}`} onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button className={`${s.button} ${s.neutralButton}`} onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button className={`${s.button} ${s.badButton}`} onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
    {totalFeedback > 0 && (
      <button className={`${s.button} ${s.resetButton}`} onClick={onResetFeedback}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
