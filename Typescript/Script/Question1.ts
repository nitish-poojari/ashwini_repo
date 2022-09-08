class MyArray {
    collection:any[]=[]
    add(value:string | number) {
     this.collection.push(value)
     }
     remove(value:string | number) {
       const index=this.collection.indexOf(value)
       return this.collection.splice(index,1)
     }
     getValues() {
     return this.collection
     }
    }
    const stringAry = new MyArray()
    stringAry.add('aaa')
    stringAry.add('bbb')
    stringAry.add('ccc')
    stringAry.remove('bbb')
    // console.log(stringAry.getValues())   //=> [ 'aaa', 'ccc' ]
    const str:any = stringAry.getValues();
    document.getElementById("1").innerHTML = str
    const numberAry = new MyArray()
     numberAry.add(1)
     numberAry.add(2)
     numberAry.add(3)
     numberAry.remove(2)
    // console.log(numberAry.getValues()) //=> [ 1, 3 ]
     const num:any = numberAry.getValues();
    document.getElementById("1_1").innerHTML = num 
     const booleanAry = new MyArray()
     //numberAry.add(true)
     //numberAry.add(false) //=> You shouldn't be able to do these.
 