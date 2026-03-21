/**
 * Custom Revision Scheduler
 * @param {boolean} isCorrect - Did the student get it right?
 * @returns {Object} { interval, nextReviewDate }
 */
export const calculateCustomRevision = (isCorrect) => {
  let intervalInDays;

  if (isCorrect) {
    // User requested: 10 days for correct answers
    intervalInDays = 10; 
  } else {
    // User requested: 7 days for incorrect/missed concepts
    intervalInDays = 7; 
  }

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + intervalInDays);

  return {
    interval: intervalInDays,
    nextReviewDate
  };
};