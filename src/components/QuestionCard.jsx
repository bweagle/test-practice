import { AnswerChoice } from './AnswerChoice';

export function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect,
  showResults = false
}) {
  if (!question) return null;

  return (
    <div className="staar-question-card">
      <div className="staar-question-number">
        Question {questionNumber}
      </div>
      <div className="staar-question-text">
        {question.question}
      </div>
      <div className="staar-answer-choices">
        {question.choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            choice={choice}
            selected={selectedAnswer === choice.id}
            onSelect={() => onAnswerSelect(choice.id)}
            showResults={showResults}
          />
        ))}
      </div>
    </div>
  );
}
