//var passc=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\-])(?=.{10,10})");
var passc=new RegExp(/^\d\d\d\-\d\d\d[A-Z][A-Z][A-Z][A-Z]/);
//var capital = new RegExp("^(?=.*[A-Z]){4,4}$");
//var symbol = new RegExp("^(?=.*[-])(?=.{3,3})");
//var number = new RegExp("^(?=.*[0-9]){3,3}");
var userc = new RegExp("^(?=.*[a-z])(?!.*[A-Z])(?!.*[!@#$%/^&*])(?=.{3,5}$)");

function is_username_valid(username){

if(userc.test(username))
    {
    console.log("Username Benar");
    }
else {console.log("Username Salah");}    
}

function is_password_valid(password){
   

if(passc.test(password))
    {
        console.log("password Benar");
    }
else {console.log("password Salah");;}    
}


is_username_valid('alwin');
is_password_valid('345-133ASDF');

