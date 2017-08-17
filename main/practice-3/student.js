const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }

    introduce() {
        if (this.clazz.hasStudent(this) && this.clazz.leader === this) {
            return super.introduce() + ` I am a Student. I am Leader of Class 2.`;
        } else if (this.clazz.hasStudent(this) && this.clazz.leader !== this) {
            return super.introduce() + ` I am a Student. I am at Class 2.`
        }

        return super.introduce() + ` I am a Student. I haven't been allowed to join Class.`;
    }
}