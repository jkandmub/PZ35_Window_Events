"use strict";

const widthText = document.querySelector("#window-width");
const scrollText = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");
function updateWidht() { widthText.textContent = window.innerWidth; }
function updateScroll() {scrollText.textContent = Math.round(window.scrollY);}
updateWidht();
updateScroll();
focusStatus.textContent = "Окно открыто.";
window.addEventListener("resize", updateWidht);
window.addEventListener("scroll", updateScroll);
window.addEventListener("focus", () => {focusStatus.textContent = "Окно активно."; });
window.addEventListener("blur", () => {focusStatus.textContent = "Окно потеряло фокус."; });
nameButton.addEventListener("click", () => {
    const answer = window.prompt("Как к вам обращаться?");
    if (answer !== null && answer.trim() !== "") {
        greeting.textContent = `Здравствуйте, ${answer.trim()}!`;
    }
});