import css from "./Options.module.css";
const Options = ({ updateFeedback, resetFeedback }) => {
  const handleClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  const handleResetClick = () => {
    resetFeedback();
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
      <button className={css.button_style} onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default Options;
