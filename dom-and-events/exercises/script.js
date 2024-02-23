function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.
  button.addEventListener("click", () => {
    paragraph.innerHTML = "Houston, we have liftoff!";
  });

  button.addEventListener("mouseover", () => {
    button.style = "background-color: green";
  });

  button.addEventListener("mouseleave", () => {
    button.style = "";
  });

  missionAbort.addEventListener("mouseover", () => {
    missionAbort.style = "background-color: red";
  });

  missionAbort.addEventListener("mouseleave", () => {
    missionAbort.style = "";
  });

  missionAbort.addEventListener("click", () => {
    let abortConfirmed = window.confirm("Are you sure you want to abort the mission?");
    
    if (abortConfirmed) {
        paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
    }
  });
}

window.addEventListener("load", init);