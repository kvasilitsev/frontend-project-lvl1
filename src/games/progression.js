import { cons } from '@hexlet/pairs';
import { getRandomIntDec } from '../functions.js';
import gameLogic from '../index.js';

const rules = 'What number is missing in the progression?';

const gameData = () => {
  const diff = getRandomIntDec();
  const missNumber = getRandomIntDec();
  const firstMember = getRandomIntDec();
  const progression = [firstMember];
  let nextMemeber = firstMember;
  for (let i = 1; i < 10; i += 1) {
    nextMemeber += diff;
    progression.push(nextMemeber);
  }
  const correctAnswer = String(progression[missNumber]);
  progression[missNumber] = '..';
  const question = progression.join(' ');
  return cons(question, correctAnswer);
};

export default () => {
  gameLogic(rules, gameData);
};
