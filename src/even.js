
import readlineSync from 'readline-sync';

const game = () => {
console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
console.log('Hello' + ' ' + userName + '!');

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;



for (let i = 1; i<4; i+=1){

    const getRandomInt = Math.floor(Math.random()*1000);

    console.log('Question: ' + getRandomInt);

    const answer = readlineSync.question('Your answer: ');

        if ((getRandomInt%2 === 0 && answer === 'yes') || (getRandomInt%2 !== 0) && answer === 'no'){
            counter=counter+1;
            console.log('Correct!');
        } 
        if (counter === 3) {
            console.log('Congratulations, ' + userName + '!')
        }
        else if (getRandomInt%2 === 0 && answer !== 'yes'){
            console.log('\'' + `${answer}` + '\' is wrong answer ;(. Correct answer was \'yes\'. Let\'s try again,' + userName + '!');
            break;
            } 
        else if (getRandomInt%2 !== 0 && answer !== 'no'){
            console.log('\'' + `${answer}` + '\' is wrong answer ;(. Correct answer was \'no\'. Let\'s try again,' + userName + '!');
            break;
            } 
}
}
const even = game();
export {even};