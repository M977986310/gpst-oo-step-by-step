// Write your code here
module.exports = class Class {

    constructor(number){
        this.number = number;
        this.members = [];
    }

    assignLeader(student){
        this.leader = student;

        if (this.leader === undefined)
            return `It is not one of us.`
        return `Assign team leader successfully.`
    }

    appendMember(student){
        this.members.push(student);
    }

    hasStudent(student){
        return this.members.includes(student) ? true : false;
    }
}