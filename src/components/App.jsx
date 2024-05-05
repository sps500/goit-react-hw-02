import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

import { useState, useEffect } from "react";

export default function App() {
  // Ініціалізація стану з локального сховища або нулями, якщо немає збережених даних
  const initialFeedback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(initialFeedback);

  // Функція для оновлення статистики та збереження її в локальному сховищі
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const updatedFeedback = {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
  };

  // Функція для скидання статистики та збереження її в локальному сховищі
  const resetFeedback = () => {
    const resetedFeedback = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetedFeedback);
    localStorage.setItem("feedback", JSON.stringify(resetedFeedback));
  };

  // Ефект для завантаження статистики з локального сховища при першому завантаженні
  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (storedFeedback) {
      setFeedback(storedFeedback);
    }
  }, []);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}
