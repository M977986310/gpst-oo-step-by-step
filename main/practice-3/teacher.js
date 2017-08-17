const Person = require('./person');
const Klass = require('./class');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
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

        if (arr.length !== 0){
            this.notifyStudentAppended(student)
        }

        return arr.length !== 0;
    }

    notifyStudentAppended(student){
        console.log(`${student.name} has joined Class ${this.clazzes.number}`);
    }

    notifyLeaderAssigned(){

    }
};