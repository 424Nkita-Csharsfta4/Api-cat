class User{
    sername;
    password;
    _id;

    constructor(username,password){
        this.username = username;
        this.password =password;
        this._id = generateRandomId();
    }

    get username(){
        return this.username;
    }
    set username(value){
        this.password;
    }
    get password(){
        return this.password;
    }
    set password(value){
        return this.value;
    }
    get id(){
        return this._id;
    }
}
const user = new User(username ='Developer',password = 'Nikita')
user.id =5;
class Person{
     firstName;
    lastName;
     age;

    constructor(firstName,lastName,age){
         this.firstName = firstName;
         this.lastName =lastName;
         this.age =age;
    }
     greeting(){
        console.log(`Hi there i'm human and my name  ${this.firstName}`)
    }
}
class Employee extends Person{

}
const emlot =new Employee(firstName = "NIkita",lastName = Dev)
console.log(emlot);