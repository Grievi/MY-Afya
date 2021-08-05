
var pname 
var email
var subject 
var message 

   function collectData(){
    
    pname = document.getElementById ("name").value;
    email = document.getElementById ("email").value;
    subject = document.getElementById ("subject").value;
    message = document.getElementById ("message").value;
   } ;  

   document.getElementById("submit").addEventListener("click",function validate(){

    collectData();
    // console.log(pname)
    // console.log(email);
    // console.log(subject);
    // console.log(message);
    if(pname == "" || pname == null ){
        alert("please enter a valid name"); 
    }
     else if(email.indexOf("@") == -1 || email.length < 6 || email == ""){
        alert("please enter a valid email address");
    }
    else if(subject == ""|| subject.length == 0){
        alert("your subject should be clear and precise but also easy to understand");       
    }
    else if (message.length == "" || message.length == null ){
        alert("Please Enter your message");       
    }
    else{
        alert("We have recieved your feedback Thank you!");
    }
 
   });




