import { cons } from '@hexlet/pairs';
import { getRandomInt } from '../functions.js';
import { gameLogic } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
    const number1 = getRandomInt();
    const number2 = getRandomInt();
    let correctAnswer;
    let question = `${number1} ${number2}`;
    if (number1 > number2){
        for (let div = number2; div >= 1; div-=1){
            if ((number1 % div === 0) && (number2 % div === 0)){
                correctAnswer = String(div);
                //console.log(div);
                return cons(question, correctAnswer);
            }
        }
    }
    else if (number1 < number2){
        for (let div = number1; div >= 1; div-=1){
            if ((number1 % div === 0) && (number2 % div === 0)){
                correctAnswer = String(div);
                //console.log(div);
                return cons(question, correctAnswer);
               
        }
    }
    }
    correctAnswer = String(number1);
    return cons(question, correctAnswer);
}
export default () => {
    gameLogic(rules, gameData);
  };