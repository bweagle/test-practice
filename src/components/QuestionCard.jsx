import { AnswerChoice } from './AnswerChoice';

export function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect,
  showResults = false
}) {
  if (!question) return null;

  const isMultiSelect = question.multiSelect || false;
  const selectedAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : (selectedAnswer ? [selectedAnswer] : []);

  return (
    <div className="staar-question-card">
      <div className="staar-question-number">
        Question {questionNumber}
      </div>
      {question.image && (
        <div style={{ margin: '1rem 0', textAlign: 'center' }}>
          <img
            src={question.image}
            alt="Question visual"
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              borderRadius: '4px',
              border: '1px solid #dee2e6'
            }}
          />
        </div>
      )}
      <div className="staar-question-text">
        {question.question}
      </div>
      {isMultiSelect && !showResults && (
        <div style={{
          fontSize: '14px',
          color: '#0066cc',
          fontWeight: '600',
          marginBottom: '1rem',
          fontStyle: 'italic'
        }}>
          Select {question.correctCount || 'all'} correct answers
        </div>
      )}
      <div className="staar-answer-choices">
        {question.choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            choice={choice}
            selected={selectedAnswers.includes(choice.id)}
            onSelect={() => onAnswerSelect(choice.id)}
            showResults={showResults}
            multiSelect={isMultiSelect}
          />
        ))}
      </div>
    </div>
  );
}
