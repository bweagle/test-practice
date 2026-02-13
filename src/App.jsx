import { useState } from 'react';
import { StartPage } from './views/StartPage';
import { TestPage } from './views/TestPage';
import { ResultsPage } from './views/ResultsPage';
import { useTestSession } from './hooks/useTestSession';
import { saveTestResult } from './utils/localStorage';
import { questions } from './data/questions';
import './styles/staar-theme.css';

function App() {
  const [currentView, setCurrentView] = useState('start'); // start, test, results
  const [testResults, setTestResults] = useState(null);

  const {
    session,
    currentQuestion,
    currentAnswer,
    currentQuestionIndex,
    currentQuestionTime,
    progress,
    isFirstQuestion,
    isLastQuestion,
    startTest,
    submitAnswer,
    nextQuestion,
    previousQuestion,
    completeTest,
    endTest
  } = useTestSession(questions);

  // Handle starting a test
  const handleStartTest = (testLength, focusCategories = null) => {
    startTest(testLength, focusCategories);
    setCurrentView('test');
    setTestResults(null);
  };

  // Handle submitting the test
  const handleSubmitTest = () => {
    const results = completeTest();
    if (results) {
      saveTestResult(results);
      setTestResults(results);
      setCurrentView('results');
    }
  };

  // Handle taking another test
  const handleTakeAnother = () => {
    endTest();
    setTestResults(null);
    setCurrentView('start');
  };

  // Handle starting focused practice on weak areas
  const handlePracticeFocus = (categories, testLength = 20) => {
    endTest();
    startTest(testLength, categories);
    setCurrentView('test');
    setTestResults(null);
  };

  return (
    <>
      {currentView === 'start' && (
        <StartPage onStartTest={handleStartTest} />
      )}

      {currentView === 'test' && (
        <TestPage
          session={session}
          currentQuestion={currentQuestion}
          currentAnswer={currentAnswer}
          currentQuestionIndex={currentQuestionIndex}
          currentQuestionTime={currentQuestionTime}
          progress={progress}
          isFirstQuestion={isFirstQuestion}
          isLastQuestion={isLastQuestion}
          onAnswerSelect={submitAnswer}
          onPrevious={previousQuestion}
          onNext={nextQuestion}
          onSubmit={handleSubmitTest}
        />
      )}

      {currentView === 'results' && (
        <ResultsPage
          results={testResults}
          onTakeAnother={handleTakeAnother}
          onPracticeFocus={handlePracticeFocus}
        />
      )}
    </>
  );
}

export default App;
