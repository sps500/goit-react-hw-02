import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

import { useState } from "react";

export default function App() {
  // Створення стану для зберігання типів відгуків
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // Функція для оновлення відгуків
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Функція для скидання відгуків
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} handleReset={handleReset} />
      <Feedback feedback={feedback} />
    </div>
  );
}
