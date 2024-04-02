const panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
    panel.addEventListener("mouseover", () => {
        activatePanel(index);
    });
});

function activatePanel(index) {
    removeActiveClasses();
    panels[index].classList.add("active");
}

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
