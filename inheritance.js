class Vehicle{
    constructor(name, price0){
        this.name = name;
        this.price = this.price;
    }
    move(){
        console.log('My name is a utshab kumar ghosh')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name,  price);
        this.load = load;
    }
}