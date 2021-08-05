//Logic Interface
var userInfo;
var matches = 0;

function ConsoltMaker(fname, lname, cell, email, symptoms, ) {
    this.fullName = fname + " " + lname;
    this.phoneNumber = cell;
    this.email = email;
    this.symptoms = symptoms;
}

function PatientMaker(fname, lname, cell, email, disease, message) {
    this.fullName = fname + " " + lname;
    this.phoneNumber = cell;
    this.email = email;
    this.disease = disease;
    this.message = message;
}

function DiseaseGenerator(name, symptoms) {
    this.diseaseName = name;
    this.diseaseSymptoms = symptoms;
}
var malaria = new DiseaseGenerator("Malaria", ["chills", "fever", "sweating", "muscle-aches", "nausea", "vomiting", "pale-skin", "headache", "abdominal-pains", "seizures"])
var typhoid = new DiseaseGenerator("Typhoid", ["muscle-aches", "constipation", "diarrhoea", "nausea", "vomiting", "fatigue", "dry-cough", "weight-loss", "abdominal-pains", "loss-of-appetite"])
var commonCold = new DiseaseGenerator("Common cold", ["fever", "muscle-aches", "cough", "runny-nose", "loss-of-smell", "chills", "fatigue", "headache", "sore-throat"]);
var influenza = new DiseaseGenerator("Influenza", ["fever", "coughing", "sore-throat", "runny-nose", "muscle-aches", "muscle-ache", "headache", "fatigue", "vomiting", "diarrhoea"]);
var pneumonia = new DiseaseGenerator("Pnuemonia", ["cough", "fever", "short-breath", "chest-pains", "loss-of-appetite", "nausea", "vomiting", "fatigue", "rapid-breathing"]);
var covid = new DiseaseGenerator("Covid-19", ["fever", "dry-cough", "fatigue", "sore-throat", "headache", "loss-of-smell", "short-breath", "chest-pains", "musle-aches", "diarrhoea"])
    //Symptoms matcher function
var symptomsMatcher = (disease, symptoms) => {
    for (let i = 0; i <= disease.length - 1; i++) {
        var myDisease = disease[i];
        for (a = 0; a <= symptoms.length - 1; a++) {
            var mySymptom = symptoms[a];
            if (mySymptom === myDisease) {
                matches += 1;
            }
        }
    }
    return matches;
}


//User Interface
$(document).ready(function() {
    $("button#symptoms-button").click(function(event) {
        event.preventDefault();
        $(".symptoms-selections").toggle();
    })
    $("button#submit1").click(function(event) {
        event.preventDefault();
        var firstName = $("input#c-fname").val();
        var secondName = $("input#c-lname").val();
        var number = $("input#c-cell").val();
        var email = $("input#c-email").val() + "@gmail.com";
        var symptoms = [];
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
            alert("Please enter your email for us to be able to communicate with you!")
        } else {
            $("input[name=symptoms]:checked").each(function() {
                symptoms.push($(this).val());
            });
            userInfo = new ConsoltMaker(firstName, secondName, number, email, symptoms)
            var malariaMatches = symptomsMatcher(malaria.diseaseSymptoms, userInfo.symptoms)
            var typhoidMatches = symptomsMatcher(typhoid.diseaseSymptoms, userInfo.symptoms)
            alert(malariaMatches)
            alert(typhoidMatches)
        }
    })
    $("#submit2").click(function(event) {
        event.preventDefault();
        var firstName = $("input#s-fname").val();
        var secondName = $("input#s-lname").val();
        var number = $("input#s-cell").val();
        var email = $("input#s-email").val() + "@gmail.com";
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
            userInfo = new PatientMaker(firstName, secondName, number, email, disease, message);
        }

    })


})