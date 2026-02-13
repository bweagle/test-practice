// Scoring and analytics utilities

/**
 * Calculate overall score for a test session
 * @param {Object} session - Test session object
 * @returns {Object} - Score details
 */
export function calculateScore(session) {
  if (!session || !session.questions || !session.answers) {
    return { score: 0, total: 0, percentage: 0 };
  }

  const { questions, answers } = session;
  let correct = 0;

  questions.forEach(q => {
    const answer = answers[q.id];
    if (answer && answer.isCorrect) {
      correct++;
    }
  });

  const total = questions.length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return {
    score: correct,
    total,
    percentage
  };
}

/**
 * Calculate scores by category
 * @param {Object} session - Test session object
 * @returns {Object} - Category breakdown
 */
export function calculateCategoryScores(session) {
  if (!session || !session.questions || !session.answers) {
    return {};
  }

  const { questions, answers, questionTimes } = session;
  const categoryMap = {};

  questions.forEach(q => {
    const category = q.category;

    // Initialize category if not exists
    if (!categoryMap[category]) {
      categoryMap[category] = {
        correct: 0,
        total: 0,
        percentage: 0,
        questions: [],
        totalTime: 0,
        averageTime: 0
      };
    }

    categoryMap[category].total++;
    categoryMap[category].questions.push(q.id);

    // Add time spent on this question
    if (questionTimes && questionTimes[q.id]) {
      categoryMap[category].totalTime += questionTimes[q.id];
    }

    // Check if answer is correct
    const answer = answers[q.id];
    if (answer && answer.isCorrect) {
      categoryMap[category].correct++;
    }
  });

  // Calculate percentages and average times
  Object.keys(categoryMap).forEach(category => {
    const { correct, total, totalTime } = categoryMap[category];
    categoryMap[category].percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    categoryMap[category].averageTime = total > 0 ? Math.round(totalTime / total) : 0;
  });

  return categoryMap;
}

/**
 * Identify strengths and weaknesses
 * @param {Object} categoryScores - Category score breakdown
 * @returns {Object} - Strengths and weaknesses
 */
export function identifyStrengthsAndWeaknesses(categoryScores) {
  const strengths = [];
  const weaknesses = [];

  Object.entries(categoryScores).forEach(([category, scores]) => {
    if (scores.percentage >= 80) {
      strengths.push(category);
    } else if (scores.percentage < 60) {
      weaknesses.push(category);
    }
  });

  return { strengths, weaknesses };
}

/**
 * Category display names
 */
const categoryNames = {
  numbers: "Numbers and Operations",
  fractions: "Fractions and Decimals",
  algebra: "Algebra and Patterns",
  geometry: "Geometry",
  measurement: "Measurement",
  data: "Data Analysis"
};

/**
 * Get display name for category
 * @param {string} category - Category key
 * @returns {string} - Display name
 */
export function getCategoryDisplayName(category) {
  return categoryNames[category] || category;
}

/**
 * Generate personalized recommendations
 * @param {Object} categoryScores - Category score breakdown
 * @param {Array} weaknesses - Weak categories
 * @returns {Array} - Recommendation strings
 */
export function generateRecommendations(categoryScores, weaknesses) {
  const recommendations = [];

  // Category-specific recommendations
  const categoryRecommendations = {
    numbers: {
      title: "Numbers and Operations",
      tips: [
        "Practice multi-digit addition and subtraction with regrouping",
        "Review multiplication and division facts",
        "Work on place value and rounding numbers",
        "Try mental math strategies for faster calculation"
      ]
    },
    fractions: {
      title: "Fractions and Decimals",
      tips: [
        "Practice finding equivalent fractions",
        "Work on comparing and ordering fractions",
        "Review adding and subtracting fractions with different denominators",
        "Practice converting between fractions and decimals"
      ]
    },
    algebra: {
      title: "Algebra and Patterns",
      tips: [
        "Look for patterns in number sequences",
        "Practice solving equations with one variable",
        "Work on identifying and extending patterns",
        "Try creating your own number patterns"
      ]
    },
    geometry: {
      title: "Geometry",
      tips: [
        "Review properties of 2D shapes",
        "Practice calculating perimeter and area",
        "Work on identifying angles (right, acute, obtuse)",
        "Study the relationships between shapes"
      ]
    },
    measurement: {
      title: "Measurement",
      tips: [
        "Practice converting between units (inches/feet, cm/meters)",
        "Work on telling time and calculating elapsed time",
        "Review money problems and making change",
        "Practice choosing appropriate units for measurement"
      ]
    },
    data: {
      title: "Data Analysis",
      tips: [
        "Practice reading and interpreting graphs and charts",
        "Work on calculating mean, median, mode, and range",
        "Review creating graphs from data tables",
        "Practice making predictions from data"
      ]
    }
  };

  // Add recommendations for each weakness
  weaknesses.forEach(category => {
    const catInfo = categoryRecommendations[category];
    if (catInfo) {
      const score = categoryScores[category].percentage;
      const displayName = getCategoryDisplayName(category);

      // Add a main recommendation
      recommendations.push({
        category: displayName,
        priority: score < 40 ? "high" : "medium",
        message: `Focus on ${displayName} (${score}% correct)`,
        tips: catInfo.tips
      });
    }
  });

  // Add general recommendations based on overall performance
  const allScores = Object.values(categoryScores).map(c => c.percentage);
  const avgScore = allScores.reduce((sum, score) => sum + score, 0) / allScores.length;

  if (avgScore < 60) {
    recommendations.push({
      category: "General",
      priority: "high",
      message: "Work on test-taking strategies",
      tips: [
        "Read each question carefully before answering",
        "Eliminate obviously wrong answers first",
        "Check your work when time allows",
        "Practice regularly to build confidence"
      ]
    });
  }

  // If no specific weaknesses but room for improvement
  if (weaknesses.length === 0 && avgScore < 90) {
    recommendations.push({
      category: "General",
      priority: "low",
      message: "You're doing great! Keep practicing to master all topics",
      tips: [
        "Review questions you got wrong",
        "Practice speed and accuracy",
        "Challenge yourself with harder problems",
        "Help others to reinforce your understanding"
      ]
    });
  }

  return recommendations;
}

/**
 * Generate complete results object
 * @param {Object} session - Test session object
 * @returns {Object} - Complete results
 */
export function generateResults(session) {
  const overallScore = calculateScore(session);
  const categoryScores = calculateCategoryScores(session);
  const { strengths, weaknesses } = identifyStrengthsAndWeaknesses(categoryScores);
  const recommendations = generateRecommendations(categoryScores, weaknesses);

  // Get incorrect questions with details
  const incorrectQuestions = session.questions
    .filter(q => {
      const answer = session.answers[q.id];
      return !answer || !answer.isCorrect;
    })
    .map(q => {
      const isMultiSelect = q.multiSelect || false;
      const correctAnswer = isMultiSelect
        ? q.choices.filter(c => c.correct).map(c => c.id)
        : q.choices.find(c => c.correct)?.id || null;

      return {
        question: q,
        userAnswer: session.answers[q.id]?.selectedAnswer || null,
        correctAnswer
      };
    });

  return {
    sessionId: session.sessionId,
    completedAt: Date.now(),
    testLength: session.testLength,
    ...overallScore,
    categoryScores,
    strengths,
    weaknesses,
    recommendations,
    incorrectQuestions,
    totalTime: session.endTime ? session.endTime - session.startTime : 0
  };
}

/**
 * Get performance level description
 * @param {number} percentage - Score percentage
 * @returns {Object} - Level info
 */
export function getPerformanceLevel(percentage) {
  if (percentage >= 90) {
    return {
      level: "Excellent",
      message: "Outstanding work! You've mastered this material.",
      color: "#28a745"
    };
  } else if (percentage >= 80) {
    return {
      level: "Very Good",
      message: "Great job! You have a strong understanding.",
      color: "#5cb85c"
    };
  } else if (percentage >= 70) {
    return {
      level: "Good",
      message: "Good work! Keep practicing to improve further.",
      color: "#5bc0de"
    };
  } else if (percentage >= 60) {
    return {
      level: "Fair",
      message: "You're making progress. Focus on your weak areas.",
      color: "#f0ad4e"
    };
  } else {
    return {
      level: "Needs Improvement",
      message: "Keep practicing! Review the explanations and try again.",
      color: "#d9534f"
    };
  }
}
