const {
  TRAIN_A_IDENTIFIER,
  TRAIN_B_IDENTIFIER,
  TRAIN_C_IDENTIFIER,
  TRAIN_A_DISTANCES,
  TRAIN_B_DISTANCES,
  TRAIN_C_DISTANCES,
} = require("./constants");

/**
 * Extract bogies from a train by splitting into array, preserving only bogies, removing escape characters
 * @param {string} train a train and its bogies as text
 * @returns {string[]} array of bogies
 */
const extractBogies = (train) =>
  train
    .split(" ")
    .splice(2, train.length)
    .map((bogie) => bogie.substring(0, 3));

/**
 * Gets remaining bogies of a train on arriving at Hyd
 * @param {string} trainId identifier for a train
 * @param {string[]} train all bogies of a train
 * @returns {string[]} remaining bogies of given train at Hyd
 */
const getBogiesAtHyd = (trainId, train) => {
  return train.filter((bogie) => {
    if (trainId === TRAIN_A_IDENTIFIER) {
      return TRAIN_A_DISTANCES[bogie] >= TRAIN_A_DISTANCES["HYB"] || TRAIN_B_DISTANCES[bogie] || TRAIN_C_DISTANCES[bogie];
    } else if (trainId === TRAIN_B_IDENTIFIER) {
      return TRAIN_B_DISTANCES[bogie] >= TRAIN_B_DISTANCES["HYB"] || TRAIN_A_DISTANCES[bogie] || TRAIN_C_DISTANCES[bogie];
    } else if (trainId === TRAIN_C_IDENTIFIER) {
      return TRAIN_C_DISTANCES[bogie] >= TRAIN_C_DISTANCES["HYB"] || TRAIN_A_DISTANCES[bogie] || TRAIN_B_DISTANCES[bogie];
    }
  });
};

/**
 * Re-calculating station distances from Hyd
 * @param {string[]} trainA bogies of trainA at Hyd
 * @param {string[]} trainB bogies of trainB at Hyd
 * @returns {Object} object with re-calculated distances from Hyd
 */
const reCalculateDistances = (trainA, trainB, trainC) => {
  let TRAIN_ABC_DISTANCES = {};
  [...trainA, ...trainB, ...trainC].forEach((bogie) => {
    TRAIN_ABC_DISTANCES[bogie] = TRAIN_A_DISTANCES[bogie]
      ? TRAIN_A_DISTANCES[bogie] - TRAIN_A_DISTANCES["HYB"]
      : TRAIN_B_DISTANCES[bogie]
      ? TRAIN_B_DISTANCES[bogie] - TRAIN_B_DISTANCES["HYB"]
      : TRAIN_C_DISTANCES[bogie] - TRAIN_C_DISTANCES["HYB"];
  });
  return TRAIN_ABC_DISTANCES;
};

/**
 * Merges all the bogies of trainA, trainB into trainAB and sorts in descending order of distances
 * @param {string[]} trainA bogies of trainA at Hyd
 * @param {string[]} trainB bogies of trainB at Hyd
 * @returns {string[]} array of bogies merged as trainAB
 */
const getMergedBogies = (trainA, trainB, trainC) => {
  let TRAIN_ABC_DISTANCES = reCalculateDistances(trainA, trainB, trainC);
  // console.log("TRAIN_ABC_DISTANCES", TRAIN_ABC_DISTANCES);
  let bogiesFromHyd = [...trainA, ...trainB, ...trainC]
    .filter((bogie) => bogie !== "HYB")
    .sort((a, b) => TRAIN_ABC_DISTANCES[b] - TRAIN_ABC_DISTANCES[a]);
  return bogiesFromHyd;
};

module.exports = { extractBogies, getBogiesAtHyd, getMergedBogies };
