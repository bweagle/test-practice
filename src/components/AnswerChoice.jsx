export function AnswerChoice({ choice, selected, onSelect, showResults = false }) {
  let className = 'staar-answer-choice';

  if (selected) {
    className += ' selected';
  }

  if (showResults) {
    if (choice.correct) {
      className += ' correct';
    } else if (selected && !choice.correct) {
      className += ' incorrect';
    }
  }

  return (
    <div
      className={className}
      onClick={!showResults ? onSelect : undefined}
      role="button"
      tabIndex={showResults ? -1 : 0}
      onKeyPress={(e) => {
        if (!showResults && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="staar-answer-label">{choice.id.toUpperCase()}</div>
      <div className="staar-answer-text">{choice.text}</div>
    </div>
  );
}
