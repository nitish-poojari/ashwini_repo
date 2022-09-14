class Course {
   name: string = ''
   fees: number = 0
   constructor(name: string, fees: number) {
      this.name = name
      this.fees = fees
   }
   public set _name(name: string) {
      this.name = name
   }
   public set _fees(fees: number) {
      this.fees = fees
   }
   public get _name(): string {
      return this.name
   }
   public get _fees(): number {
      return this.fees
   }
}
class Computer extends Course {
   subjectList: string[] = []
   constructor(name: string, fees: number, subjectList: string[]) {
      super(name, fees)
      this.subjectList = subjectList
   }
   public set _subjectList(subjectList: string[]) {
      this.subjectList = subjectList
   }
   public get _subjectList(): string[] {
      return this.subjectList
   }
}

class Electronics extends Course {
   subjectList: string[] = []
   constructor(name: string, fees: number, subjectList: []) {
      super(name, fees)
      this.subjectList = subjectList
   }
   public set _subjectList(subjectList: string[]) {
      this._subjectList = subjectList
   }
   public get _subjectList(): string[] {
      return this.subjectList
   }
}
const c1 = new Computer('Computer', 400000, ['JavaSript', 'Html/CSS', 'Data Structure'])
//console.log(c1)
//const c2:any= (c1)
let myString = JSON.stringify(c1);
document.getElementById("7").innerHTML = myString
