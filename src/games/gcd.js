import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../functions.js';
import { gameLogic } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};
const gameData = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();

  let correctAnswer = String(NOD(number1, number2));
  const question = `${number1} ${number2}`;        
  return cons(question, correctAnswer);
};
export default () => {
  gameLogic(rules, gameData);
};
