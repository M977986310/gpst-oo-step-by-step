const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,clazz){
        super(name,age);
        this.clazz = clazz;
    }

    introduce(){
        if (this.clazz)
        return super.introduce() + ` I am a Student. I haven't been allowed to join Class.`
        return super.introduce() + ` I am a Student. I am Leader of Class 2.`
    }
}