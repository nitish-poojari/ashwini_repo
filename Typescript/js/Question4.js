"use strict";
let Accounts = [];
class bankAccount {
    constructor(id = 0, firstName = "", lastName = "", address = "", phone = 0, email = "", type = "") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    createAccount(b) {
        Accounts.push(b);
        console.log(Accounts);
    }
    updateAccount(b) {
        let id = Number(prompt('Enter Customer id : '));
        let index = Accounts.findIndex((item) => item.id == id);
        let choice = Number(prompt('Which data do you want update? \n 1: FirstName \n 2. LastName \n 3. Address \n 4. Phone \n 5. Email \n 6. Account Type'));
        switch (choice) {
            case 1:
                var newFirstName = prompt("Enter your updated first name :");
                console.log(Accounts[index].firstName);
                Accounts[index].firstName = newFirstName;
                break;
            case 2:
                var newLastName = prompt("Enter your updated last name :");
                console.log(Accounts[index].lastName);
                Accounts[index].lastName = newLastName;
                break;
            case 3:
                var newAddress = prompt("Enter your updated address:");
                console.log(Accounts[index].address);
                Accounts[index].address = newAddress;
                break;
            case 4:
                var newPhone = prompt("Enter your updated Phone Number :");
                console.log(Accounts[index].phone);
                Accounts[index].phone = newPhone;
                break;
            case 5:
                var newEmail = prompt("Enter your updated Email :");
                console.log(Accounts[index].email);
                Accounts[index].email = newEmail;
                break;
            case 6:
                var newAccType = prompt("Enter your updated Account Type :");
                console.log(Accounts[index].type);
                Accounts[index].type = newAccType;
                break;
        }
        console.log(Accounts);
    }
    deleteAccount(did) {
        for (let i = 0; i < Accounts.length; i++) {
            if (Accounts[i].id == did) {
                Accounts.splice(i, 1);
            }
        }
        // console.log(Accounts)
    }
}
class transaction extends bankAccount {
    constructor(date, type, amount, customerId) {
        super();
        this.date = '';
        this.type = '';
        this.amount = 0;
        this.customerId = '';
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.customerId = customerId;
    }
    depositfunds(damount) {
        this.amount += damount;
        return this.amount;
    }
    withdrawFunds(wamount) {
        this.amount -= wamount;
        return this.amount;
    }
}
let obj = new bankAccount(1, 'ashwini', 'kaujalgikar', 'Pune', 9876554321, 'ashwini@gmail.com', 'saving');
let obj1 = new bankAccount(2, 'ashwini', 'kaujalgikar', 'Pune', 9876554321, 'ashwini@gmail.com', 'saving');
obj.createAccount(obj);
//obj.updateAccount(obj)
//obj1.createAccount(obj1)
//obj1.updateAccount(obj1)
//obj1.deleteAccount(2)
let o = new transaction('08-09-22', 'saving', 5000, '1');
let total = o.depositfunds(1000);
console.log(`total amount after depositing:${total}`);
total = o.withdrawFunds(1000);
console.log(`total amount after withdrawing:${total}`);
//let n = (obj.Accounts)
//document.getElementById("4").innerHTML = n
