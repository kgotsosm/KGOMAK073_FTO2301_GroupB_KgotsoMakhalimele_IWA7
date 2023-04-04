const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line


const owed = (Math.abs(parseFloat(leoBalance)) + Math.abs(parseFloat(sarahBalance))).toFixed(2);

const leo = `${leoName} ${leoSurname} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})\n`;

const sarah = `${sarahName} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})\n`;

const total = `  Total amount owed: R ${owed}`;

const result = `\n${leo}${sarah}${divider}\n${total}\n${divider}`;

console.log(result);