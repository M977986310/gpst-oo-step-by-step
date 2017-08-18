
module.exports = class Class {

    constructor(number){
        this.number = number;
        this.members = [];
    }

    assignLeader(student){
        if (this.teacher) {
            this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.number}`);
        }

        this.leader = student;

        if (this.hasStudent(student)){
            if (this.leader === undefined){
                return `It is not one of us.`;
            }else {
                return `Assign team leader successfully.`;
            }
        }else {
            return `It is not one of us.`;
        }

    }

    appendMember(student){
        this.members.push(student);
        if (this.teacher) {
            this.teacher.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.number}`);
        }
    }

    hasStudent(student){
        return this.members.includes(student) ? true : false;
    }
}