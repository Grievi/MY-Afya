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
        var email = $("input#-email").val();
        var symptoms = $("input#c-symptoms").val();
        var description = $("input#c-description").val();

        if (firstName === "" || secondName === "") {
            alert("Please enter your names!")
        } else if (number.length !== 10) {
            alert("Please enter a valid Phone Number");
        } else if (symptoms === "") {
            alert("Please make a list of your symptoms for us to be able to give you a diagnosis!");
        } else {
            alert("Hurray!")
        }
    })
})