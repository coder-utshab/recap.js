const numbers = [4, 5, 7, 12, 45, 88];
const total = numbers.reduce( (previous, current) => previous +current, 0)
console.log(total)

const sum = numbers.reduce( (p, c) => p + c, 0)
console.log(sum)


