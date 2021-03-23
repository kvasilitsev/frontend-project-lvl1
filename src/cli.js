import readlineSync from 'readline-sync';
const printName = () => {
const userName = readlineSync.question('May I have your name?');
return userName;
};
export { printName };