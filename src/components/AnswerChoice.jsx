export function AnswerChoice({ choice, selected, onSelect, showResults = false, multiSelect = false }) {
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
      role={multiSelect ? "checkbox" : "button"}
      aria-checked={multiSelect ? selected : undefined}
      tabIndex={showResults ? -1 : 0}
      onKeyPress={(e) => {
        if (!showResults && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="staar-answer-label">
        {multiSelect ? (
          <span style={{ fontSize: '18px' }}>{selected ? '☑' : '☐'}</span>
        ) : (
          choice.id.toUpperCase()
        )}
      </div>
      <div className="staar-answer-text">{choice.text}</div>
    </div>
  );
}
