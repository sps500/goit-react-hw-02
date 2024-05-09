import css from "./App.module.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

import { useState, useEffect } from "react";

export default function App() {
  const hasFeedbackData = localStorage.getItem("feedback") !== null;
  const initialFeedback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(initialFeedback);
  const [showFeedback, setShowFeedback] = useState(hasFeedbackData);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const updatedFeedback = {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
    setShowFeedback(true); // Показати список статистики після оновлення відгуку
  };

  const resetFeedback = () => {
    const resetedFeedback = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetedFeedback);
    localStorage.setItem("feedback", JSON.stringify(resetedFeedback));
    setShowFeedback(false); // Приховати список статистики після скидання відгуку
  };

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
  }, []);

  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      {showFeedback ? <Feedback feedback={feedback} /> : <Notification />}
    </div>
  );
}
