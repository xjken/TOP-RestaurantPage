export function loadHome() {
    const content = document.querySelector("#content");
    content.className = "home";
    content.textContent = "";

    const hero = document.createElement("section");
    hero.classList.add("hero");

    const h1 = document.createElement("h1");
    h1.textContent = "The Uncle Pizza";

    const heroP1 = document.createElement("p");
    heroP1.textContent = "Handmade pizza in the heart of Nanjing";

    const heroP2 = document.createElement("p");
    heroP2.textContent = "Fresh dough. Rich toppings. Friendly prices.";

    hero.append(h1, heroP1, heroP2);

    const intro = document.createElement("section");
    intro.classList.add("introduction");

    const h2 = document.createElement("h2");
    h2.textContent = "Welcome";

    const introP1 = document.createElement("p");
    introP1.textContent = "Welcome to The Uncle Pizza, a cozy pizza shop located on Hankou Xi Lu in Gulou District, Nanjing. We make fresh pizza every day using homemade dough and quality ingredients.";

    const introP2 = document.createElement("p");
    introP2.textContent = "Whether you're grabbing a quick lunch, meeting friends after class, or enjoying a relaxed dinner, Uncle Pizza is the perfect place to enjoy simple and delicious food.";

    intro.append(h2, introP1, introP2);

    content.append(hero, intro);
}