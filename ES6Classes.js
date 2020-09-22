//Class is template or blue print
    // - encapsuate data and functionality into an object
//new means to create and object

class User {
    constructor(username, email, password){
        //the objects setup
        //the data that has to due with this bubble
        //'this' refers to the instance of the Bubble class
        this.username = username;
        this.email = email;
        this.password = password;
    }
    //static method
    static countusers(){
        console.log('there are 50 users')
    }  
    register(){
        console.log(this.username+' is now registered')
    }
}
//instanciating User class
let bob = new User('bob', 'bob@bob.com')
//bob is instance of User
bob.register();
//calling static method
User.countusers();

//Extentding Userclass
class Member extends User {
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage
    }

    getPackate() {
        console.log(this.username+' is subscribed to the '+ this.package)
    }
}

let joe = new Member('mike', 'mike@mike.com', '456456', 'standard')

// joe.getPackate();
joe.register();