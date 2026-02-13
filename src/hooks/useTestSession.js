import { useState, useEffect, useCallback, useRef } from 'react';
import { saveTestSession, getCurrentSession, clearCurrentSession } from '../utils/localStorage';
import { selectTestQuestions } from '../utils/questionSelector';
import { generateResults } from '../utils/scoring';

/**
 * Custom hook for managing test session state with timing
 * @param {Array} allQuestions - All available questions
 * @returns {Object} - Session state and methods
 */
export function useTestSession(allQuestions) {
  const [session, setSession] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionStartTime = useRef(null);

  // Load existing session on mount
  useEffect(() => {
    const existingSession = getCurrentSession();
    if (existingSession) {
      setSession(existingSession);
      setCurrentQuestionIndex(existingSession.currentQuestionIndex || 0);
      questionStartTime.current = Date.now();
    }
  }, []);

  // Save session to localStorage whenever it changes
  useEffect(() => {
    if (session) {
      saveTestSession(session);
    }
  }, [session]);

  // Start timing when question changes
  useEffect(() => {
    if (session && session.questions[currentQuestionIndex]) {
      questionStartTime.current = Date.now();
    }
  }, [currentQuestionIndex, session]);

  /**
   * Calculate time spent on current question
   */
  const getTimeSpent = useCallback(() => {
    if (!questionStartTime.current) return 0;
    return Math.floor((Date.now() - questionStartTime.current) / 1000); // seconds
  }, []);

  /**
   * Start a new test
   * @param {number} testLength - Number of questions
   * @param {Array} focusCategories - Optional array of categories to focus on
   */
  const startTest = useCallback((testLength, focusCategories = null) => {
    const questions = selectTestQuestions(allQuestions, testLength, focusCategories);

    const newSession = {
      sessionId: `test_${Date.now()}`,
      testLength,
      startTime: Date.now(),
      endTime: null,
      currentQuestionIndex: 0,
      questions,
      answers: {},
      questionTimes: {}, // Track time per question
      isComplete: false
    };

    setSession(newSession);
    setCurrentQuestionIndex(0);
    questionStartTime.current = Date.now();
  }, [allQuestions]);

  /**
   * Submit an answer for the current question
   * @param {string} questionId - Question ID
   * @param {string} answerId - Selected answer ID
   */
  const submitAnswer = useCallback((questionId, answerId) => {
    if (!session) return;

    const question = session.questions.find(q => q.id === questionId);
    if (!question) return;

    const correctAnswer = question.choices.find(c => c.correct);
    const isCorrect = correctAnswer && correctAnswer.id === answerId;
    const timeSpent = getTimeSpent();

    setSession(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: {
          selectedAnswer: answerId,
          isCorrect,
          timeSpent
        }
      },
      questionTimes: {
        ...prev.questionTimes,
        [questionId]: (prev.questionTimes[questionId] || 0) + timeSpent
      }
    }));

    // Reset timer for this question
    questionStartTime.current = Date.now();
  }, [session, getTimeSpent]);

  /**
   * Navigate to specific question
   * @param {number} index - Question index
   */
  const goToQuestion = useCallback((index) => {
    if (!session) return;

    // Record time spent on current question before navigating
    const currentQ = session.questions[currentQuestionIndex];
    if (currentQ && questionStartTime.current) {
      const timeSpent = getTimeSpent();
      setSession(prev => ({
        ...prev,
        questionTimes: {
          ...prev.questionTimes,
          [currentQ.id]: (prev.questionTimes[currentQ.id] || 0) + timeSpent
        }
      }));
    }

    if (index >= 0 && index < session.questions.length) {
      setCurrentQuestionIndex(index);
      setSession(prev => ({
        ...prev,
        currentQuestionIndex: index
      }));
      questionStartTime.current = Date.now();
    }
  }, [session, currentQuestionIndex, getTimeSpent]);

  /**
   * Go to next question
   */
  const nextQuestion = useCallback(() => {
    if (!session) return;

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < session.questions.length) {
      goToQuestion(nextIndex);
    }
  }, [session, currentQuestionIndex, goToQuestion]);

  /**
   * Go to previous question
   */
  const previousQuestion = useCallback(() => {
    if (!session) return;

    const prevIndex = currentQuestionIndex - 1;
    if (prevIndex >= 0) {
      goToQuestion(prevIndex);
    }
  }, [currentQuestionIndex, goToQuestion]);

  /**
   * Complete the test and generate results
   * @returns {Object} - Test results
   */
  const completeTest = useCallback(() => {
    if (!session) return null;

    // Record final question time
    const currentQ = session.questions[currentQuestionIndex];
    if (currentQ && questionStartTime.current) {
      const timeSpent = getTimeSpent();
      session.questionTimes[currentQ.id] = (session.questionTimes[currentQ.id] || 0) + timeSpent;
    }

    const completedSession = {
      ...session,
      endTime: Date.now(),
      isComplete: true
    };

    setSession(completedSession);

    const results = generateResults(completedSession);

    return results;
  }, [session, currentQuestionIndex, getTimeSpent]);

  /**
   * End test and clear session
   */
  const endTest = useCallback(() => {
    clearCurrentSession();
    setSession(null);
    setCurrentQuestionIndex(0);
    questionStartTime.current = null;
  }, []);

  /**
   * Check if current question is answered
   */
  const isCurrentQuestionAnswered = useCallback(() => {
    if (!session || !session.questions[currentQuestionIndex]) return false;

    const currentQ = session.questions[currentQuestionIndex];
    return !!session.answers[currentQ.id];
  }, [session, currentQuestionIndex]);

  /**
   * Get current question
   */
  const getCurrentQuestion = useCallback(() => {
    if (!session || !session.questions[currentQuestionIndex]) return null;
    return session.questions[currentQuestionIndex];
  }, [session, currentQuestionIndex]);

  /**
   * Get answer for current question
   */
  const getCurrentAnswer = useCallback(() => {
    const currentQ = getCurrentQuestion();
    if (!currentQ || !session) return null;

    return session.answers[currentQ.id] || null;
  }, [session, getCurrentQuestion]);

  /**
   * Get progress percentage
   */
  const getProgress = useCallback(() => {
    if (!session) return 0;

    const answered = Object.keys(session.answers).length;
    const total = session.questions.length;

    return total > 0 ? Math.round((answered / total) * 100) : 0;
  }, [session]);

  /**
   * Get current question time
   */
  const getCurrentQuestionTime = useCallback(() => {
    return getTimeSpent();
  }, [getTimeSpent]);

  return {
    session,
    currentQuestionIndex,
    currentQuestion: getCurrentQuestion(),
    currentAnswer: getCurrentAnswer(),
    currentQuestionTime: getCurrentQuestionTime(),
    progress: getProgress(),
    isAnswered: isCurrentQuestionAnswered(),
    isFirstQuestion: currentQuestionIndex === 0,
    isLastQuestion: session ? currentQuestionIndex === session.questions.length - 1 : false,
    startTest,
    submitAnswer,
    goToQuestion,
    nextQuestion,
    previousQuestion,
    completeTest,
    endTest
  };
}
