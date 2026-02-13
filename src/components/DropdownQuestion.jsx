import { useState } from 'react';

export function DropdownQuestion({
  question,
  questionNumber,
  selectedAnswers = {},
  onAnswerSelect,
  showResults = false
}) {
  if (!question || question.questionType !== 'dropdown') return null;

  const handleDropdownChange = (dropdownId, value) => {
    const newAnswers = { ...selectedAnswers, [dropdownId]: value };
    onAnswerSelect(newAnswers);
  };

  // Check if all dropdowns are filled
  const allFilled = question.dropdowns?.every(d => selectedAnswers[d.id]);

  // Parse question text and insert dropdowns
  const renderQuestionWithDropdowns = () => {
    const parts = [];
    let text = question.question;

    question.dropdowns.forEach((dropdown, index) => {
      const placeholder = `[DROPDOWN${index + 1}]`;
      const splitIndex = text.indexOf(placeholder);

      if (splitIndex !== -1) {
        // Add text before dropdown
        if (splitIndex > 0) {
          parts.push({ type: 'text', content: text.substring(0, splitIndex) });
        }

        // Add dropdown
        parts.push({ type: 'dropdown', dropdown, index });

        // Continue with remaining text
        text = text.substring(splitIndex + placeholder.length);
      }
    });

    // Add remaining text
    if (text) {
      parts.push({ type: 'text', content: text });
    }

    return parts.map((part, idx) => {
      if (part.type === 'text') {
        return <span key={`text-${idx}`}>{part.content}</span>;
      } else {
        const dropdown = part.dropdown;
        const selectedValue = selectedAnswers[dropdown.id] || '';
        const isCorrect = showResults && selectedValue === dropdown.correctAnswer;
        const isIncorrect = showResults && selectedValue && selectedValue !== dropdown.correctAnswer;

        let dropdownStyle = {
          padding: '4px 8px',
          margin: '0 4px',
          borderRadius: '4px',
          border: '2px solid #0066cc',
          fontSize: '16px',
          fontWeight: '600',
          backgroundColor: 'white',
          cursor: showResults ? 'default' : 'pointer'
        };

        if (showResults) {
          if (isCorrect) {
            dropdownStyle.borderColor = '#28a745';
            dropdownStyle.backgroundColor = '#d4edda';
          } else if (isIncorrect) {
            dropdownStyle.borderColor = '#dc3545';
            dropdownStyle.backgroundColor = '#f8d7da';
          }
        }

        return (
          <select
            key={`dropdown-${idx}`}
            value={selectedValue}
            onChange={(e) => handleDropdownChange(dropdown.id, e.target.value)}
            disabled={showResults}
            style={dropdownStyle}
          >
            <option value="">--</option>
            {dropdown.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.text}
              </option>
            ))}
          </select>
        );
      }
    });
  };

  return (
    <div className="staar-question-card">
      <div className="staar-question-number">
        Question {questionNumber}
      </div>

      {question.imageDescription && (
        <div style={{
          margin: '1rem 0',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#495057'
        }}>
          <strong>Data:</strong> {question.imageDescription}
        </div>
      )}

      {question.image && (
        <div style={{ margin: '1rem 0', textAlign: 'center' }}>
          <img
            src={import.meta.env.BASE_URL + question.image.replace(/^\//, '')}
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

      <div className="staar-question-text" style={{ fontSize: '18px', lineHeight: '2' }}>
        {renderQuestionWithDropdowns()}
      </div>

      {showResults && question.explanation && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: '#e7f3ff',
          borderRadius: '8px',
          borderLeft: '4px solid #0066cc'
        }}>
          <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#0066cc' }}>
            Explanation:
          </div>
          <div>{question.explanation}</div>
        </div>
      )}
    </div>
  );
}
