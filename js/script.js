let pname = document.getElementById("name").value;
let email = document.getElementById("email").value;
let subject = document.getElementById("subject").value;

function validate() {
    if (pname = "") {
        alert("Please enter your name")
    }
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();

        if (pname.length == "" || pname.length <= 2) {
            alert("please enter a valid name");
            return false;
        } else if (email.indexOf("@") == -1 || email.length < 6 || email.lenth == "") {
            alert("please enter a valid email address");
            return false;
        } else if (subject.length == "" || subject.length <= 3 || subject.length > 15) {
            alert("your suject should be clear and precise but also easy to understand");
            return false;
        } else {
            alert("We have recieved your feedback Thank you!");
            return true;
        }
    });
}
// console.log(validate());
// validate();