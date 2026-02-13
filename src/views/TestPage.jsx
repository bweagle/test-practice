import { useState, useEffect } from 'react';
import { QuestionCard } from '../components/QuestionCard';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';

export function TestPage({
  session,
  currentQuestion,
  currentAnswer,
  currentQuestionIndex,
  currentQuestionTime,
  progress,
  isFirstQuestion,
  isLastQuestion,
  onAnswerSelect,
  onPrevious,
  onNext,
  onSubmit
}) {
  const [liveTime, setLiveTime] = useState(currentQuestionTime);

  // Update live time every second
  useEffect(() => {
    setLiveTime(currentQuestionTime);

    const interval = setInterval(() => {
      setLiveTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex, currentQuestionTime]);

  if (!session || !currentQuestion) {
    return <div className="staar-loading">Loading...</div>;
  }

  const handleAnswerSelect = (answerId) => {
    onAnswerSelect(currentQuestion.id, answerId);
  };

  return (
    <div className="staar-container">
      <div className="staar-header">
        <h1 className="staar-title">STAAR Math Practice</h1>
        <p className="staar-subtitle">
          Question {currentQuestionIndex + 1} of {session.questions.length}
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '14px', color: '#6c757d' }}>
          <span>Progress: {progress}%</span>
          <span style={{ fontWeight: '600', color: '#0066cc' }}>⏱ {liveTime}s</span>
          <span>{Object.keys(session.answers).length} / {session.questions.length} answered</span>
        </div>
        <ProgressBar percentage={progress} />
      </div>

      <QuestionCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        selectedAnswer={currentAnswer?.selectedAnswer || null}
        onAnswerSelect={handleAnswerSelect}
      />

      <div className="staar-nav-buttons">
        <Button
          variant="secondary"
          onClick={onPrevious}
          disabled={isFirstQuestion}
        >
          ← Previous
        </Button>

        {isLastQuestion ? (
          <Button
            onClick={onSubmit}
            disabled={Object.keys(session.answers).length < session.questions.length}
          >
            Submit Test
          </Button>
        ) : (
          <Button onClick={onNext}>
            Next →
          </Button>
        )}
      </div>

      {Object.keys(session.answers).length < session.questions.length && isLastQuestion && (
        <div style={{ textAlign: 'center', marginTop: '1rem', color: '#dc3545', fontSize: '14px' }}>
          Please answer all questions before submitting
        </div>
      )}
    </div>
  );
}
