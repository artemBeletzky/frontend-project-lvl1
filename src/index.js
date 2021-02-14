function start(gameDataObj) {
  const name = gameDataObj.greetAndGetName();
  console.log(gameDataObj.gameRules);
  const result = (function () {
    let counter = 0;
    while (counter < 3) {
      const question = gameDataObj.createQuestion();
      const formattedQuestion = gameDataObj.formatQuestionForUser !== undefined
        ? gameDataObj.formatQuestionForUser(question)
        : question;
      const expectedAnswer = gameDataObj.formatExpectedAns
        ? gameDataObj.formatExpectedAns(gameDataObj.solve(question))
        : gameDataObj.solve(question);
      console.log(`Question: ${formattedQuestion}`);
      const userAnswer = gameDataObj.getUsrAnswer();
      if (expectedAnswer == userAnswer) {
        console.log('Correct!');
        counter += 1;
        if (counter === 3) {
          return {
            result: 'won',
          };
        }
      } else {
        return {
          correctAns: expectedAnswer,
          wrongAns: userAnswer,
          result: 'lost',
        };
      }
    }
  }());
  gameDataObj.greetOrTryAgain(result, name);
}

export default start;
