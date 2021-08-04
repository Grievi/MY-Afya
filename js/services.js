//Logic Interface
function PatientMaker(fname, lname, cell, symptoms, ) {
    this.name = fname + lname;
    this.phoneNumber = cell;
    this.symptoms = symptoms;
}





//User Interface
$(document).ready(function() {
    $("button#submit1").click(function(event) {
        event.preventDefault();
        var firstName = $("input#c-fname").val();
        var secondName = $("input#c-lname").val();
        var number = $("input#c-cell").val();
        var email = $("input#s-email").val();
        var symptoms = $("input#c-symptoms").val();
        var description = $("input#c-description").val();

        if (firstName === "" || secondName === "") {
            alert("Please enter your names!")
            if (firstName === "") {
                $("input#c-fname").focus();
            } else if (secondName === "") {
                $("input#c-lname").focus();
            }
        } else if (number.length !== 10) {
            alert("Please enter a valid Phone Number");
            $("input#c-cell").focus();
        } else if (email === "") {
            alert("Please fill in your e-mail address!")
        } else if (symptoms === "") {
            alert("Please make a list of your symptoms for us to be able to give you a diagnosis!");
            $("input#c-symptoms").focus();
        } else {
            alert("Hurray!")
        }
    })
    $("#submit2").click(function(event) {
        event.preventDefault();
        var firstName = $("input#s-fname").val();
        var secondName = $("input#s-lname").val();
        var number = $("input#s-cell").val();
        var email = $("input#s-email").val();
        var disease = $("input#s-disease").val();
        var message = $("input#s-message").val();

        if (firstName === "" || secondName === "") {
            alert("Please enter your names!")
            if (firstName === "") {
                $("input#s-fname").focus();
            } else if (secondName === "") {
                $("input#s-lname").focus();
            }
        } else if (number.length !== 10) {
            alert("Please enter a valid Phone Number");
            $("input#s-cell").focus();
        } else if (email === "") {
            alert("Please fill in your e-mail address!")
        } else if (disease === "") {
            alert("Please name what you are suffering from so that we can match you with the needed specialist!");
            $("input#s-disease").focus();
        } else {
            alert("Hurray!")
        }
    })
})