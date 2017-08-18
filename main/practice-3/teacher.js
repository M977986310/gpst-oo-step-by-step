const Person = require('./person');
const Klass = require('./class');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.assignTheTeacher(this.clazzes);

    }

    introduce() {
        if (this.clazzes.length === 0)
            return super.introduce() + ` I am a Teacher. I teach No Class.`;

        let arr = this.clazzes.map(item => {
            return item.number;
        });

        return super.introduce() + ` I am a Teacher. I teach Class ${arr.join(",")}.`
    }

    isTeaching(student) {
        let arr = [];

        this.clazzes.map(item =>{
            if (item.hasStudent(student)){
                arr.push(item);
            }
        });



        return arr.length !== 0;
    }

    assignTheTeacher(){
        for (let clazz of this.clazzes) {
            clazz.teacher = this;
        }
    }

    notifyStudentAppended(student){
        return `${student.name} has joined Class ${this.clazzes.number}`;
    }

    notifyLeaderAssigned(){

    }
};