"use strict";
class Course {
    constructor(name, fees) {
        this.name = '';
        this.fees = 0;
        this.name = name;
        this.fees = fees;
    }
    set _name(name) {
        this.name = name;
    }
    set _fees(fees) {
        this.fees = fees;
    }
    get _name() {
        return this.name;
    }
    get _fees() {
        return this.fees;
    }
}
class Computer extends Course {
    constructor(name, fees, subjectList) {
        super(name, fees);
        this.subjectList = [];
        this.subjectList = subjectList;
    }
    set _subjectList(subjectList) {
        this.subjectList = subjectList;
    }
    get _subjectList() {
        return this.subjectList;
    }
}
class Electronics extends Course {
    constructor(name, fees, subjectList) {
        super(name, fees);
        this.subjectList = [];
        this.subjectList = subjectList;
    }
    set _subjectList(subjectList) {
        this._subjectList = subjectList;
    }
    get _subjectList() {
        return this.subjectList;
    }
}
const c1 = new Computer('Computer', 400000, ['JavaSript', 'Html/CSS', 'Data Structure']);
console.log(c1);
//const c2:any= (c1)
let myString = JSON.stringify(c1);
document.getElementById("7").innerHTML = myString;
