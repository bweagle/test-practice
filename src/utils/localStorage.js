// LocalStorage utility functions

const STORAGE_KEY = 'staar_math_practice';

/**
 * Get all storage data
 * @returns {Object} - Storage data object
 */
function getStorageData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {
      testHistory: [],
      currentSession: null,
      settings: {
        showTimer: false,
        showHints: true,
        soundEnabled: false
      }
    };
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return {
      testHistory: [],
      currentSession: null,
      settings: {
        showTimer: false,
        showHints: true,
        soundEnabled: false
      }
    };
  }
}

/**
 * Save data to localStorage
 * @param {Object} data - Data to save
 */
function setStorageData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
}

/**
 * Save current test session
 * @param {Object} session - Test session object
 */
export function saveTestSession(session) {
  const data = getStorageData();
  data.currentSession = session;
  setStorageData(data);
}

/**
 * Get current test session
 * @returns {Object|null} - Current session or null
 */
export function getCurrentSession() {
  const data = getStorageData();
  return data.currentSession;
}

/**
 * Clear current session
 */
export function clearCurrentSession() {
  const data = getStorageData();
  data.currentSession = null;
  setStorageData(data);
}

/**
 * Save completed test result to history
 * @param {Object} result - Test result object
 */
export function saveTestResult(result) {
  const data = getStorageData();

  // Add to history
  data.testHistory.push({
    sessionId: result.sessionId,
    completedAt: result.completedAt,
    score: result.score,
    total: result.total,
    percentage: result.percentage,
    testLength: result.testLength,
    categoryScores: result.categoryScores,
    strengths: result.strengths,
    weaknesses: result.weaknesses
  });

  // Keep only last 50 tests to prevent storage overflow
  if (data.testHistory.length > 50) {
    data.testHistory = data.testHistory.slice(-50);
  }

  // Clear current session
  data.currentSession = null;

  setStorageData(data);
}

/**
 * Get test history
 * @param {number} limit - Optional limit on number of results
 * @returns {Array} - Array of test results
 */
export function loadTestHistory(limit = null) {
  const data = getStorageData();
  const history = data.testHistory.sort((a, b) => b.completedAt - a.completedAt);

  return limit ? history.slice(0, limit) : history;
}

/**
 * Get settings
 * @returns {Object} - Settings object
 */
export function getSettings() {
  const data = getStorageData();
  return data.settings;
}

/**
 * Save settings
 * @param {Object} settings - Settings object
 */
export function saveSettings(settings) {
  const data = getStorageData();
  data.settings = { ...data.settings, ...settings };
  setStorageData(data);
}

/**
 * Clear all data (for testing or reset)
 */
export function clearAllData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}

/**
 * Get storage statistics
 * @returns {Object} - Storage stats
 */
export function getStorageStats() {
  const data = getStorageData();
  return {
    totalTests: data.testHistory.length,
    hasCurrentSession: !!data.currentSession,
    averageScore: data.testHistory.length > 0
      ? Math.round(
          data.testHistory.reduce((sum, test) => sum + test.percentage, 0) / data.testHistory.length
        )
      : 0,
    recentTests: data.testHistory.slice(-5)
  };
}

/**
 * Export data for backup
 * @returns {string} - JSON string of all data
 */
export function exportData() {
  const data = getStorageData();
  return JSON.stringify(data, null, 2);
}

/**
 * Import data from backup
 * @param {string} jsonString - JSON string to import
 * @returns {boolean} - Success status
 */
export function importData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    setStorageData(data);
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
}
