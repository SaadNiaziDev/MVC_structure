class Vehicle{
    constructor(wheels,topspeed){
        this.wheels=wheels;
        this.topspeed=topspeed;
    }

    display(){
        console.log("Top Speed "+this.topspeed+" kp/h", "Total wheels : " + this.wheels);
    }
};

class Bikes extends Vehicle{
    constructor(wheels,topspeed,engine){
        super(wheels,topspeed);
        this.engine=engine;
    }

    details(){
        console.log(super.display()+ "Engine capacity: "+this.engine);
    }
};

const car = new Vehicle(4,220);
const Honda = new Bikes(2,145,' 125');
car.display();
Honda.details();
