//Code Your Solution Below
window.addEventListener("load", entryPoint);

function entryPoint() {
    //window.alert("Page has loaded");

    let submitButtonRef = document.querySelector("input[type=submit]");
    submitButtonRef.addEventListener("click", submitButtonClicked);
}

function submitButtonClicked(event) {
    //window.alert("You clicked the submit button");
    checkFormInputs(event);
}

function checkFormInputs(submitEvent) {
    let testNameRef = document.querySelector("input[name=testName]");
    let testDateRef = document.querySelector("input[name=testDate]");
    let rocketTypeRef = document.querySelector("select[name=rocketType]");
    let rocketBoostersRef = document.querySelector("input[name=boosterCount]");
    let windRatingRef = document.querySelector("input[name=windRating]:checked");
    
    let hasErrors = false;

    if (testNameRef.value === "" || testDateRef.value === "" || rocketTypeRef.value === "") {
        hasErrors = true;
        window.alert("The test name, test date, and rocket type all need to have a value!");
    }
    if (rocketBoostersRef.value < 1 || rocketBoostersRef.value > 9) {
        hasErrors = true;
        window.alert("Rocket boosters has to be between 1 and 9!");
    }
    if (windRatingRef === null) {
        hasErrors = true;
        window.alert("You need to select a wind rating!");
    }

    if (hasErrors === true) {
        submitEvent.preventDefault();
    }
}