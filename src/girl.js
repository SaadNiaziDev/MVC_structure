import { Vehicle } from './src/boy';
export class Bikes extends Vehicle{
    constructor(wheels,topspeed,engine){
        super(wheels,topspeed);
        this.engine=engine;
    }

    details(){
        console.log(super.display()+ "Engine capacity: "+this.engine);
    }
};