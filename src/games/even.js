import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../functions.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameData = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  gameLogic(rules, gameData);
};
