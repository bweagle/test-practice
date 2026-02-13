// Question selection and randomization utilities

/**
 * Fisher-Yates shuffle algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled array
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Select random questions with balanced category distribution
 * @param {Array} allQuestions - All available questions
 * @param {number} count - Number of questions to select
 * @returns {Array} - Selected questions
 */
export function selectRandomQuestions(allQuestions, count) {
  if (count <= 0 || allQuestions.length === 0) {
    return [];
  }

  // If requesting more questions than available, return all shuffled
  if (count >= allQuestions.length) {
    return shuffleArray(allQuestions);
  }

  // Get all unique categories
  const categories = [...new Set(allQuestions.map(q => q.category))];

  // Calculate base questions per category
  const questionsPerCategory = Math.floor(count / categories.length);
  const remainder = count % categories.length;

  const selected = [];

  // Select questions from each category
  categories.forEach((category, index) => {
    // Get all questions for this category and shuffle
    const categoryQuestions = shuffleArray(
      allQuestions.filter(q => q.category === category)
    );

    // Calculate how many to take from this category
    // Distribute remainder among first categories
    const take = questionsPerCategory + (index < remainder ? 1 : 0);

    // Add the questions
    selected.push(...categoryQuestions.slice(0, take));
  });

  // If we don't have enough (some categories might be empty), fill from all questions
  if (selected.length < count) {
    const remaining = shuffleArray(
      allQuestions.filter(q => !selected.includes(q))
    );
    selected.push(...remaining.slice(0, count - selected.length));
  }

  // Remove any potential duplicates (should not happen, but safety check)
  const uniqueSelected = Array.from(new Set(selected.map(q => q.id)))
    .map(id => selected.find(q => q.id === id));

  // Final shuffle to mix categories
  return shuffleArray(uniqueSelected);
}

/**
 * Ensure difficulty mix in selected questions
 * Target: 40% easy, 40% medium, 20% hard
 * @param {Array} questions - Questions to check
 * @param {number} testLength - Desired test length
 * @returns {Array} - Questions with balanced difficulty
 */
export function ensureDifficultyMix(questions, testLength) {
  // Target distribution
  const target = {
    easy: Math.round(testLength * 0.4),
    medium: Math.round(testLength * 0.4),
    hard: testLength - Math.round(testLength * 0.4) * 2
  };

  // Separate questions by difficulty
  const byDifficulty = {
    easy: questions.filter(q => q.difficulty === 'easy'),
    medium: questions.filter(q => q.difficulty === 'medium'),
    hard: questions.filter(q => q.difficulty === 'hard')
  };

  const selected = [];

  // Try to meet targets for each difficulty
  Object.keys(target).forEach(difficulty => {
    const available = shuffleArray(byDifficulty[difficulty]);
    const needed = target[difficulty];
    selected.push(...available.slice(0, needed));
  });

  // If we don't have enough, fill with remaining questions
  if (selected.length < testLength) {
    const remaining = shuffleArray(
      questions.filter(q => !selected.includes(q))
    );
    selected.push(...remaining.slice(0, testLength - selected.length));
  }

  // Shuffle final selection
  return shuffleArray(selected.slice(0, testLength));
}

/**
 * Select questions for a test with balanced categories and difficulty
 * @param {Array} allQuestions - All available questions
 * @param {number} testLength - Number of questions for the test
 * @param {Array} focusCategories - Optional array of categories to focus on OR specific question IDs
 * @returns {Array} - Selected questions
 */
export function selectTestQuestions(allQuestions, testLength, focusCategories = null) {
  // Check if focusCategories contains question IDs (they start with a letter/number pattern like "staar004")
  let questionsPool = allQuestions;
  if (focusCategories && focusCategories.length > 0) {
    // Check if first item looks like a question ID (contains numbers/specific format)
    const isQuestionIds = focusCategories[0] && (focusCategories[0].includes('staar') || focusCategories[0].length > 10);

    if (isQuestionIds) {
      // Filter by specific question IDs
      questionsPool = allQuestions.filter(q => focusCategories.includes(q.id));
    } else {
      // Filter by categories
      questionsPool = allQuestions.filter(q => focusCategories.includes(q.category));
    }

    // If no questions found, fall back to all questions
    if (questionsPool.length === 0) {
      questionsPool = allQuestions;
    }
  }

  // If we have specific questions (small pool), just shuffle and return
  if (questionsPool.length <= testLength) {
    return shuffleArray(questionsPool);
  }

  // First, select random questions with balanced categories
  let selected = selectRandomQuestions(questionsPool, testLength * 1.5); // Get 50% more for better mix

  // Then ensure difficulty distribution
  selected = ensureDifficultyMix(selected, testLength);

  return selected;
}

/**
 * Get statistics about question distribution
 * @param {Array} questions - Questions to analyze
 * @returns {Object} - Statistics
 */
export function getQuestionStats(questions) {
  const stats = {
    total: questions.length,
    byCategory: {},
    byDifficulty: {
      easy: 0,
      medium: 0,
      hard: 0
    }
  };

  questions.forEach(q => {
    // Count by category
    if (!stats.byCategory[q.category]) {
      stats.byCategory[q.category] = 0;
    }
    stats.byCategory[q.category]++;

    // Count by difficulty
    if (stats.byDifficulty[q.difficulty] !== undefined) {
      stats.byDifficulty[q.difficulty]++;
    }
  });

  return stats;
}
