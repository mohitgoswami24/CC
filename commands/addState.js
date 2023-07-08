const states = require('../data/states');

function addState(args) {
  const [stateName] = args;

  // Generate a 2-character state ID
  const stateId = generateStateId();

  // Create a new state object
  const newState = {
    stateName,
    stateId,
  };

  // Add the new state to the list of states
  states.push(newState);

  console.log('State added successfully!');
}

function generateStateId() {
  // Generate a random 2-character state ID
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let stateId = '';
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    stateId += chars.charAt(randomIndex);
  }
  return stateId;
}

module.exports = addState;
