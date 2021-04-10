import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../functions.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
}
return true;
};

const gameData = () => {
  const question = getRandomInt();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  gameLogic(rules, gameData);
};
