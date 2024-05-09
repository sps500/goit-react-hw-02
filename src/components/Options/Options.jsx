import css from "./Options.module.css";
import { useState } from "react";

const Options = ({ updateFeedback, resetFeedback }) => {
  const [feedbackCount, setFeedbackCount] = useState(0);

  const handleClick = (feedbackType) => {
    updateFeedback(feedbackType);
    setFeedbackCount((prevCount) => prevCount + 1);
  };

  const handleResetClick = () => {
    resetFeedback();
    setFeedbackCount(0);
  };

  return (
    <div>
      <button className={css.button_style} onClick={() => handleClick("good")}>
        Good
      </button>
      <button
        className={css.button_style}
        onClick={() => handleClick("neutral")}
      >
        Neutral
      </button>
      <button className={css.button_style} onClick={() => handleClick("bad")}>
        Bad
      </button>
      {feedbackCount > 0 && (
        <button className={css.button_style} onClick={handleResetClick}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
