const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 55000},
    {id: 3, name: 'hp', price: 45000},
    {id: 4, name: 'macbook', price: 170000},
]
//map ar kag avaba korta pari
const names = products.map(products => products.name)
//console.log(names)
const prices = products.map(p => p.price)
console.log(prices)

//FOR EACH A VABA KORTA PARI
products.forEach(p => console.log(p.id))

// FILTER KORAR JONNO
const expensive = products.filter(p => p.price > 50000)
console.log(expensive)

//FIND KORAR JONNO
const affordable = products.find(p => p.price < 50000)
console.log(affordable)

//REDUCE KORAR JONNO
const total = products.reduce( (acum, current) => acum + current. price , 0)
console.log(total)