import { Button } from '../components/Button';
import { getCategoryDisplayName, getPerformanceLevel } from '../utils/scoring';

export function ResultsPage({ results, onTakeAnother, onPracticeFocus }) {
  if (!results) {
    return <div className="staar-loading">Loading results...</div>;
  }

  const performanceLevel = getPerformanceLevel(results.percentage);

  // Format total time to minutes and seconds
  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`;
    }
    return `${seconds}s`;
  };

  return (
    <div className="staar-container">
      <div className="staar-results-header">
        <h1 className="staar-title">Test Complete!</h1>
        <div className="staar-score-display">
          {results.score} / {results.total}
        </div>
        <div className="staar-performance-level" style={{ color: performanceLevel.color }}>
          {results.percentage}% - {performanceLevel.level}
        </div>
        <p style={{ color: '#6c757d', marginTop: '1rem' }}>
          {performanceLevel.message}
        </p>
        {results.totalTime > 0 && (
          <p style={{ color: '#6c757d', marginTop: '0.5rem', fontSize: '16px' }}>
            ⏱ Total Time: {formatTime(results.totalTime)}
          </p>
        )}
      </div>

      {/* Category Scores */}
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '24px' }}>Performance by Topic</h2>
        {Object.entries(results.categoryScores).map(([category, scores]) => (
          <div key={category} className="staar-category-score">
            <div style={{ flex: 1 }}>
              <strong>{getCategoryDisplayName(category)}</strong>
              <div style={{ fontSize: '14px', color: '#6c757d' }}>
                {scores.correct} of {scores.total} correct
              </div>
              {scores.averageTime > 0 && (
                <div style={{ fontSize: '13px', color: '#0066cc', marginTop: '2px' }}>
                  ⏱ Avg: {scores.averageTime}s per question
                </div>
              )}
            </div>
            <div style={{ width: '200px' }}>
              <div className="staar-category-bar">
                <div
                  className="staar-category-bar-fill"
                  style={{ width: `${scores.percentage}%` }}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: '4px', fontSize: '14px', fontWeight: '600' }}>
                {scores.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strengths and Weaknesses */}
      {(results.strengths.length > 0 || results.weaknesses.length > 0) && (
        <div style={{ marginTop: '3rem' }}>
          {results.strengths.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>✓ Strengths</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {results.strengths.map(category => (
                  <span
                    key={category}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#d4edda',
                      color: '#155724',
                      borderRadius: '20px',
                      fontSize: '14px'
                    }}
                  >
                    {getCategoryDisplayName(category)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {results.weaknesses.length > 0 && (
            <div>
              <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>⚠ Areas to Improve</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {results.weaknesses.map(category => (
                  <span
                    key={category}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#f8d7da',
                      color: '#721c24',
                      borderRadius: '20px',
                      fontSize: '14px'
                    }}
                  >
                    {getCategoryDisplayName(category)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      {results.recommendations.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '24px' }}>Recommendations</h2>
          {results.recommendations.map((rec, index) => (
            <div
              key={index}
              className={`staar-recommendation priority-${rec.priority}`}
            >
              <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '18px' }}>
                {rec.message}
              </div>
              <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
                {rec.tips.slice(0, 2).map((tip, i) => (
                  <li key={i} style={{ marginBottom: '0.25rem', fontSize: '16px' }}>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Incorrect Questions Review */}
      {results.incorrectQuestions.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '24px' }}>
            Review Missed Questions ({results.incorrectQuestions.length})
          </h2>
          {results.incorrectQuestions.map((item, index) => {
            const isMultiSelect = item.question.multiSelect || false;
            const userAnswers = Array.isArray(item.userAnswer) ? item.userAnswer : (item.userAnswer ? [item.userAnswer] : []);
            const correctAnswers = Array.isArray(item.correctAnswer) ? item.correctAnswer : [item.correctAnswer];

            const userChoices = item.question.choices.filter(c => userAnswers.includes(c.id));
            const correctChoices = item.question.choices.filter(c => correctAnswers.includes(c.id));

            return (
              <div key={item.question.id} style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#fff', border: '2px solid #dee2e6', borderRadius: '8px' }}>
                <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#495057' }}>
                  Question {index + 1}: {item.question.question}
                </div>

                {userAnswers.length > 0 && (
                  <div style={{ marginBottom: '0.5rem', color: '#dc3545' }}>
                    ✗ Your answer{isMultiSelect && userAnswers.length > 1 ? 's' : ''}: {
                      userChoices.map(c => c.text).join(', ') || 'None'
                    }
                  </div>
                )}

                {userAnswers.length === 0 && (
                  <div style={{ marginBottom: '0.5rem', color: '#ffc107' }}>
                    ⚠ Not answered
                  </div>
                )}

                <div style={{ marginBottom: '1rem', color: '#28a745', fontWeight: '600' }}>
                  ✓ Correct answer{isMultiSelect && correctAnswers.length > 1 ? 's' : ''}: {
                    correctChoices.map(c => c.text).join(', ')
                  }
                </div>

                <div className="staar-explanation">
                  <div className="staar-explanation-title">Explanation:</div>
                  <div>{item.question.explanation}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ marginTop: '3rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {results.weaknesses.length > 0 && onPracticeFocus && (
          <Button
            size="large"
            onClick={() => onPracticeFocus(results.weaknesses, 20)}
            style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#000' }}
          >
            Practice Weak Areas
          </Button>
        )}
        <Button size="large" onClick={onTakeAnother}>
          Take Another Test
        </Button>
      </div>
    </div>
  );
}
