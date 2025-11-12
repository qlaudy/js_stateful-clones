'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let currentState = { ...state };
  const result = [];

  for (const key of actions) {
    let nextState = { ...currentState };

    if (key.type === 'clear') {
      nextState = {};
    } else if (key.type === 'addProperties') {
      nextState = { ...nextState, ...key.extraData };
    } else if (key.type === 'removeProperties') {
      for (const item of key.keysToRemove) {
        delete nextState[item];
      }
    }

    result.push(nextState);
    currentState = nextState;
  }

  return result;
}

module.exports = transformStateWithClones;
