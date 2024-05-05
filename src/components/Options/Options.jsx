const Options = ({ updateFeedback, resetFeedback }) => {
  const handleClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  const handleResetClick = () => {
    resetFeedback();
  };

  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default Options;
