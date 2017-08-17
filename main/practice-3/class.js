
module.exports = class Class {

    constructor(number){
        this.number = number;
        this.members = [];
        this.teacher = [];
    }

    assignLeader(student){
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
        // for (let item of this.teacher){
        //     item.notifyStudentAppended(student);
        // }
    }

    hasStudent(student){
        return this.members.includes(student) ? true : false;
    }
}