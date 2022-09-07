"use strict";
class bankAccount {
    constructor(id = 0, firstName = "", lastName = "", address = "", phone = 0, email = "", type = "") {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.phone = 0;
        this.email = '';
        this.type = '';
        this.Accounts = [{
                id: 0,
                firstName: '',
                lastName: '',
                address: '',
                phone: 0,
                email: "",
                type: ''
            }];
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    createAccount(id = 0, firstName = "", lastName = "", address = "", phone = 0, email = "", type = "") {
        this.Accounts.push({ id, firstName, lastName, address, phone, email, type });
    }
    updateAccount() {
    }
    deleteAccount(num) {
        for (let i = 0; i < this.Accounts.length; i++) {
            if (this.Accounts[i].id == num) {
                this.Accounts.splice(i, 1);
            }
        }
    }
}
class transaction extends bankAccount {
    constructor(data, type, amount, customerId) {
        super();
        this.data = '';
        this.type = '';
        this.amount = 0;
        this.customerId = '';
        this.data = data;
        this.type = type;
        this.amount = amount;
        this.customerId = customerId;
    }
    depositfunds() {
    }
    withdrawFunds() {
    }
}
const obj = new bankAccount();
obj.createAccount(1, 'ashwini', 'kaujalgikar', 'Pune', 9876554321, 'ashwini@gmail.com', 'saving');
//let n= (obj.Accounts)
//document.getElementById("4").innerHTML= n
