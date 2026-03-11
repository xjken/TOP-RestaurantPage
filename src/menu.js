import placeholderImg from "./img/000_menu_placeholder.png";

const menu = [];

class MenuItem {
    constructor(imgSrc = placeholderImg, name, desc, price) {
        this.imgSrc = imgSrc;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}

const addItemToMenu = function(name, desc, price, imgSrc) {
    const newMenuItem = new MenuItem(imgSrc, name, desc, price);
    menu.push(newMenuItem);
}

{
    addItemToMenu("Margherita", "tomato / Anja cheese", 30);
    addItemToMenu("Four seasons pizza", "tomato / Anjia cheese / HAM / olive / mushroom / Pepper", 40);
    addItemToMenu("Vinata", "tomato / Anja cheese / HAM / mushroom", 40);
    addItemToMenu("Salami", "tomato / Anja cheese / salami sausage", 40);
    addItemToMenu("Hawaiian pizza", "tomato / Anja cheese / HAM / Pineapple", 45);
    addItemToMenu("Mixed cheese", "tomato / Anja cheese / parmigiano / gorgonzola / ricotta", 50);
    addItemToMenu("Chicken Pizza", "tomato / Anja cheese / chicken", 45);
    addItemToMenu("Tuna pizza", "tomato / Anja cheese / onion / tuna", 45);
    addItemToMenu("Federica", "tomato / anja cheese / mushroom / basil sauce", 45);
    addItemToMenu("Calzone", "tomato / Anjia cheese / mushroom / HAM / olive", 45);
    addItemToMenu("Uncle Pizza", "tomato / pizza vanilla leaf / rucola / olive / Basil / cheese", 55);
    addItemToMenu("Truffle & Porcini Mushroom", "tomato / Anjia cheese / homemade sausage / truffle oil / Mushroom", 55);
    addItemToMenu("Ciaccina", "Anja cheese / Sesame / Parma ham", 55);
    addItemToMenu("Cheese Sausage", "tomato / cheese / sausage", 55);
    addItemToMenu("Beef", "tomato / Anjia cheese / beef", 55);
    addItemToMenu("Durian Pizza", "Anjia cheese / imported durian", 65);
    addItemToMenu("Basil Shrimp Pizza", "basil sauce / Anjia cheese / shrimp", 50);
}

export const loadMenu = function () {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.className = "";
    content.classList.add("menu");

    const h2 = document.createElement("h2");
    h2.textContent = "Menu";

    const menuContainer = document.createElement("section");
    menuContainer.classList.add("menu-container");

    menu.forEach((item) => {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        const img = document.createElement("img");
        img.src = item.imgSrc;
        img.alt = item.name;

        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.classList.add("desc");
        desc.textContent = item.desc;

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `¥${item.price}`;

        menuCard.append(img, name, desc, price);
        menuContainer.appendChild(menuCard);
    });

    content.append(h2, menuContainer);
};