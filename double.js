
//MAP AR KAG HOYLO KONO AKTA ARRAY AR OPOR KONO FUNCTION CHALANOR POR JA RESULT TA ANBA
//SOBGULA AKTA ARRAY DEYA AMAKA RETURN KORA DEBA

const numbers = [12, 42, 54, 62, 86];
const doubled = numbers.map(num => num * 2)
console.log(doubled)
//output--> [ 24, 84, 108, 124, 172 ]

//amra jodii prottak ta upadan ar satha 5 add korta chay tahola
const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus)


//amra jodii length bar korta chay
const frieands = ['sajib', 'shuvobis', 'diptokanon', 'animesh']
const lengths = frieands.map(frnd => frnd.length)
console.log(lengths)

//ami jodi prottak ta freand ar first letter neta chay
const firstLetter = frieands.map(frieands => frieands[0])
console.log(firstLetter);