import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

const content = document.querySelector("#content");

const resetContent = () => {
    content.className = "";
    content.textContent = "";
};

homeBtn.addEventListener("click", () => {
    resetContent();
    loadHome();
});

menuBtn.addEventListener("click", () => {
    resetContent();
    loadMenu();
});

aboutBtn.addEventListener("click", () => {
    resetContent();
    loadAbout();
});

loadHome();