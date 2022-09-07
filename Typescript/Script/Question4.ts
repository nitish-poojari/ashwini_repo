class bankAccount{
    id:number=0
    firstName:string=''
    lastName:string=''
    address:string=''
    phone:number=0
    email:string=''
    type:string=''

    Accounts=[{
      id:0,
      firstName:'',
      lastName:'',
      address:'',
      phone:0,
      email:"",
      type:''
  }];

    constructor(id:number=0,firstName:string="",lastName:string="",address:string="",phone:number=0,email:string="",type:string=""){
      this.id=id
      this.firstName=firstName
      this.lastName=lastName
      this.address=address
      this.phone=phone
      this.email=email
      this.type=type
    }
 
    createAccount(id:number=0,firstName:string="",lastName:string="",address:string="",phone:number=0,email:string="",type:string=""){
      this.Accounts.push({id,firstName,lastName,address,phone,email,type})
    }
 
    updateAccount(){
 
    }
 
    deleteAccount(num:number){
      for(let i=0;i<this.Accounts.length;i++){
          if(this.Accounts[i].id==num){
              this.Accounts.splice(i,1);
          }
      }
  }
 }
 
 class transaction extends bankAccount{
   data:string=''
    type:string=''
    amount:number=0;
    customerId:string=''

    constructor(data:string,type:string,amount:number,customerId:string){
        super();
        this.data=data;
        this.type=type;
        this.amount=amount;
        this.customerId=customerId;
    }

    depositfunds(){
 
    }
 
    withdrawFunds(){
 
    }
 }

 const obj=new bankAccount()
 obj.createAccount(1,'ashwini','kaujalgikar','Pune',9876554321,'ashwini@gmail.com','saving')
 //let n= (obj.Accounts)
 //document.getElementById("4").innerHTML= n