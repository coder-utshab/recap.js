// const products = [
//     {id: 1, name: 'lenovo', price: 65000},
//     {id: 2, name: 'dell', price: 55000},
//     {id: 3, name: 'hp', price: 45000},
//     {id: 4, name: 'macbook', price: 170000},
// ]

// class Products{
//     country = 'Bangladesh';
//     speak(talk){
//         console.log(`studey in parul university ${talk}`)
//     }
// }

// const lenovo = new Products()
// console.log(lenovo)
// lenovo.speak('studey in parul university')


class Teacher{
    //kono kechu add korar jonno 
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is a teachimg math')
    }
}
const dalim = new Teacher('Dalim sir', 'physics')
console.log(dalim);

const razzak = new Teacher('Razzak sir', 'English')
console.log(razzak);