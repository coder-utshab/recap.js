//double ar man bar korar jonno
const numbers = [4, 5, 2, 8, 10];

const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double)
}
console.log(doubled)
//output--> [ 8, 10, 4, 16, 20 ]