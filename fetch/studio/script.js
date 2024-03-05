//TODO: Add Your Code Below

let divContainerRef;

window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(async function(response) {
        let apiResponse = await response.json();
        console.log(apiResponse);

        renderContainer(apiResponse);
    });

    divContainerRef = document.getElementById("container");
});

function renderContainer(jsonData) {
    let innerHtml = "";
    for (let i = 0; i < jsonData.length; i++) {
        let astronautHtml = createAstronautTemplate(jsonData[i]);
        innerHtml += astronautHtml;
    }
    divContainerRef.innerHTML = innerHtml;
}

function createAstronautTemplate(astronautObj) {
    let innerHtml = "<div class=\"astronaut\">";
    innerHtml += "<div class=\"bio\">";
    innerHtml += "<h3>" + astronautObj.firstName + " " + astronautObj.lastName + "</h3>";
    innerHtml += "<ul>";
    innerHtml += "<li>Hours in space: " +  astronautObj.hoursInSpace + "</li>";
    innerHtml += "<li>Active: " + astronautObj.active + "</li>";
    innerHtml += "<li>Skills: " + astronautObj.skills + "</li>";
    innerHtml += "</ul>";
    innerHtml += "</div>";
    innerHtml += "<img class=\"avatar\" src=\"" + astronautObj.picture + "\">";
    innerHtml += "</div>";

    return innerHtml;
}