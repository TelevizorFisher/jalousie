import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./tabs.css";

function Tabs() {
  const [questions, setQuestions] = useState(data);
  return (
    <div>
      <div className="container-grid">
        <h3>Запитання і відповіді про нашу компанію:</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Tabs;
