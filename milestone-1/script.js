var toglleButton = document.getElementById("toggle-skills");
var skils = document.getElementById("skills");
toglleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skils.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
