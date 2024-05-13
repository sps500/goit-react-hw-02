import css from "./Options.module.css";

const Options = ({ totalFeedback, updateFeedback, resetFeedback }) => {
  const handleResetClick = () => {
    resetFeedback();
  };

  return (
    <div>
      <button
        className={css.button_style}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.button_style}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.button_style}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button_style} onClick={handleResetClick}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
