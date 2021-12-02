class Student {
    constructor(name, email,degree){
        this.name = name;
        this.email = email;
        this.degree = degree;
    }
    // constructor(age){
    //     this.age = age;
    // }

    display(){
        for(var i=0; i<5;i++){
        console.log(this.name,this.email,this.degree);
    }}

    underage= x => {
        if(x<=18)
            return true;
        return false;
    }
}

//const kdc = new Student('18');
const std = new Student('asad','bcsf18a517@pucit.edu.pk','bscs18');
std.display();
console.log('Student is underage : '+ std.underage(18));
