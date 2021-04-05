import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const gameLogic = (rules, gameData) => {
  
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log('Hello' + ' ' + userName + '!');
  console.log(rules);

  for (let i = 1; i < 4; i += 1) {
    const answerAndQuestion = gameData();
    const question = car(answerAndQuestion);
    const correctAnswer = cdr(answerAndQuestion);
    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } 
    else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`\nCongratulations, ${userName}!`);
};

