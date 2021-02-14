import readlineSync from 'readline-sync';

function greetAndGetName() {
  console.log('Welcome To The Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function createRandomNum() {
  return Math.ceil(Math.random() * 100);
}

function formatExpectedAns(boolean) {
  return boolean ? 'yes' : 'no';
}

function checkIfEven(number) {
  return number % 2 === 0;
}

function getUsrAnswer() {
  return readlineSync.question('Your answer: ');
}

const evenGameData = {
  greetAndGetName,
  gameRules: 'Answer "yes" if the number is even, otherwise answer "no".',
  createQuestion: createRandomNum,
  formatQuestionStr: undefined,
  solve: checkIfEven,
  formatExpectedAns,
  getUsrAnswer,
};

export default evenGameData;
