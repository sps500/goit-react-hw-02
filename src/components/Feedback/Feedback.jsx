import css from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const { good, neutral, bad, total, positive } = feedback;

  return (
    <div>
      <ul className={css.feedback_list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
