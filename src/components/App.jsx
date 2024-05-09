import css from "./App.module.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    const resetedFeedback = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetedFeedback);
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />

      {total > 0 && <Feedback feedback={{ ...feedback, total, positive }} />}
      {total === 0 && <Notification />}
    </div>
  );
}
