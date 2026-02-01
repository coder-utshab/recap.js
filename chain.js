//data access
const data = [{ id: 1, name: 'sajib', address: 'parul university'}];
console.log(data[0].address)

//example - 2
const products = {
    count: 5000, 
    data: [
        { id: 1, name: 'asus laptop', price: 65000},
        { id: 2, name: 'macbook', price: 1.5000},
    ]
}
// secoend product price bar korar jonno
console.log(products.data[1].name)

//example- 3
// const user = {
//     id: 5001,
//     name:'Sajib biswas',
//     address: {
//         street: {
//             first: '54/1 arpara magura',
//             secoend: 'singra side ar golii',
//             third: 'villeage side'
//         },
//         city: 'magura'
//     }
// }
// console.log(user.address.street.secoend)



//optionall chain ar jonno
const user = {
    id: 5001,
    name:'Sajib biswas',
    address: {
        street: {
            first: '54/1 arpara magura',
            secoend: 'singra side ar golii',
            third: 'villeage side'
        },
        city: 'magura'
    }
}
const user2 = {
    id: 2500,
    name: 'Utshab kumar Ghosh',
    address:{
        city:'Jessore',
        country:'Bangladesh'
    }
}
//  qution mark ? ata hoylo optionall saining jodii streate man paoa jay tayla samna jao
// ar jodii nahh paoa jay tayla agay o nahh
console.log(user2.address.street?.secoend)