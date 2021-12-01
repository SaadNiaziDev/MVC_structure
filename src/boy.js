export class Vehicle{
    constructor(wheels,topspeed){
        this.wheels=wheels;
        this.topspeed=topspeed;
    }

    display(){
        console.log("Top Speed "+this.topspeed+" kp/h", "Total wheels : " + this.wheels);
    }
};