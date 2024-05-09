import Notification from "../Notification/Notification";
import css from "./Feedback.module.css";

const Feedback = ({ feedback: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  const positive = total ? Math.round((good / total) * 100) : 0;

  return (
    <div>
      <ul className={css.feedback_list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive:{" "}
          {total ? isNaN(positive) ? 0 : positive + "%" : <Notification />}
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
