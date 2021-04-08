import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../functions.js';
import { gameLogic } from '../index.js';
const rules = 'What is the result of the expression?';

const gameData = () => {
  let correctAnswer; 
  let question; 
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();
  const getOpeartor = Math.random();
    if (getOpeartor < 0.34){
        correctAnswer = String(operand1 + operand2);
        question = `${operand1} + ${operand2}`;
    }
    else if (getOpeartor < 0.66 && getOpeartor >= 0.34){
        correctAnswer = String(operand1 - operand2);
        question = `${operand1} - ${operand2}`;
    }
    else {
        correctAnswer = String(operand1 * operand2);
        question = `${operand1} * ${operand2}`;
    }
    return cons(question, correctAnswer);
}

export default () => {
    gameLogic(rules, gameData);
  };

