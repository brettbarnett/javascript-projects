let flightStatusRef;
let shuttleBackgroundRef;
let spaceShuttleHeightRef;
let spaceShuttleRef;
window.addEventListener("load", createEventHandlers);

let spaceShuttleHeight;
let spaceShuttlePosition;

// Write your JavaScript code here.
// Remember to pay attention to page loading!
function createEventHandlers() {
    //window.alert("Hello! You should see this alert when all the elements have loaded!");

    let takeOffButtonRef = document.getElementById("takeoff");
    takeOffButtonRef.addEventListener("click", takeOffButtonClicked);

    let landingButtonRef = document.getElementById("landing");
    landingButtonRef.addEventListener("click", landingButtonClicked);

    flightStatusRef = document.getElementById("flightStatus");
    shuttleBackgroundRef = document.getElementById("shuttleBackground");
    spaceShuttleHeightRef = document.getElementById("spaceShuttleHeight");
    spaceShuttleHeight = 0;

    spaceShuttleRef = document.getElementById("rocket");

    let abortMissionButtonRef = document.getElementById("missionAbort");
    abortMissionButtonRef.addEventListener("click", abortMissionButtonClicked);

    let leftButtonRef = document.getElementById("left");
    leftButtonRef.addEventListener("click", leftButtonClicked);

    let rightButtonRef = document.getElementById("right");
    rightButtonRef.addEventListener("click", rightButtonClicked);

    let upButtonRef = document.getElementById("up");
    upButtonRef.addEventListener("click", upButtonClicked);

    let downButtonRef = document.getElementById("down");
    downButtonRef.addEventListener("click", downButtonClicked);
}

function takeOffButtonClicked() {
    //window.alert("You clicked the takeoff button!");
    spaceShuttleHeight = Number(spaceShuttleHeightRef.innerHTML);

    let takeOffConfirmed = window.confirm("Confirm that the shuttle is ready for takeoff");

    if (takeOffConfirmed === true) {
        spaceShuttleHeight += 10000;

        flightStatusRef.innerHTML = "Shuttle in flight";
        shuttleBackgroundRef.style = "background-color:blue;";
        spaceShuttleHeightRef.innerHTML = spaceShuttleHeight;
    }
}

function landingButtonClicked() {
    //window.alert("You clicked the landing button!");

    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatusRef.innerHTML = "The shuttle has landed.";
    shuttleBackgroundRef.style = "background-color:green";
    spaceShuttleHeightRef.innerHTML = "0";
    resetShuttlePosition();
}

function abortMissionButtonClicked() {
    //window.alert("You clicked the abort button!");

    let abortConfirmed = window.confirm("Confirm that you want to abort the mission.");

    if (abortConfirmed === true) {
        flightStatusRef.innerHTML = "Mission aborted.";
        shuttleBackgroundRef.style = "background-color:green";
        spaceShuttleHeightRef.innerHTML = "0";
        resetShuttlePosition();
    }
}

function leftButtonClicked() {
    let currentPosition = spaceShuttleRef.offsetLeft;
    if (currentPosition >= 10) {
      spaceShuttleRef.style.left = currentPosition - 10 + "px";
    }
}

function rightButtonClicked() {
    let currentPosition = spaceShuttleRef.offsetLeft;
    if (currentPosition < 701) {
      spaceShuttleRef.style.left = currentPosition + 10 + "px";
    }
}

function upButtonClicked() {
    let currentPosition = spaceShuttleRef.offsetTop;
    if (currentPosition > 0) {
        spaceShuttleRef.style.top = currentPosition - 10 + "px";
        spaceShuttleHeight += 10000;
        updateSpaceShuttleHeight(spaceShuttleHeight);
    }
}

function downButtonClicked() {
    let currentPosition = spaceShuttleRef.offsetTop;
    if (currentPosition < 250) {
        spaceShuttleRef.style.top = currentPosition + 10 + "px";
        spaceShuttleHeight -= 10000;
        updateSpaceShuttleHeight(spaceShuttleHeight);
    }
}

function updateSpaceShuttleHeight(newHeight) {
    spaceShuttleHeightRef.innerHTML = String(newHeight);
}

function resetShuttlePosition() {
    spaceShuttleRef.style.top = "250px";
    spaceShuttleRef.style.left = "377px";
}