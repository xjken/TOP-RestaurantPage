const menu = [];

class MenuItem {
    constructor(imgSrc, name, desc, price) {
        this.imgSrc = imgSrc;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}

const addItemToMenu = function (imgSrc, name, desc, price) {
    const newMenuItem = new MenuItem(imgSrc, name, desc, price);
    menu.push(newMenuItem);
};

{
    addItemToMenu("img/000_menu_placeholder.png", "Margherita", "tomato / Anja cheese", 30);
    addItemToMenu("img/000_menu_placeholder.png", "Four seasons pizza", "tomato / Anjia cheese / HAM / olive / mushroom / Pepper", 40);
    addItemToMenu("img/000_menu_placeholder.png", "Vinata", "tomato / Anja cheese / HAM / mushroom", 40);
    addItemToMenu("img/000_menu_placeholder.png", "Salami", "tomato / Anja cheese / salami sausage", 40);
    addItemToMenu("img/000_menu_placeholder.png", "Hawaiian pizza", "tomato / Anja cheese / HAM / Pineapple", 45);
    addItemToMenu("img/000_menu_placeholder.png", "Mixed cheese", "tomato / Anja cheese / parmigiano / gorgonzola / ricotta", 50);
    addItemToMenu("img/000_menu_placeholder.png", "Chicken Pizza", "tomato / Anja cheese / chicken", 45);
    addItemToMenu("img/000_menu_placeholder.png", "Tuna pizza", "tomato / Anja cheese / onion / tuna", 45);
    addItemToMenu("img/000_menu_placeholder.png", "Federica", "tomato / anja cheese / mushroom / basil sauce", 45);
    addItemToMenu("img/000_menu_placeholder.png", "Calzone", "tomato / Anjia cheese / mushroom / HAM / olive", 45);
    addItemToMenu("img/000_menu_placeholder.png", "Uncle Pizza", "tomato / pizza vanilla leaf / rucola / olive / Basil / cheese", 55);
    addItemToMenu("img/000_menu_placeholder.png", "Truffle&porcini mushroom", "tomato / Anjia cheese / homemade sausage / truffle oil / Mushroom", 55);
    addItemToMenu("img/000_menu_placeholder.png", "Ciaccina", "Anja cheese / Sesame / Parma ham", 55);
    addItemToMenu("img/000_menu_placeholder.png", "Cheese sausage", "tomato / cheese / sausage", 55);
    addItemToMenu("img/000_menu_placeholder.png", "Beef", "tomato / Anjia cheese / beef", 55);
    addItemToMenu("img/000_menu_placeholder.png", "Durian pizza", "Anjia cheese / imported durian", 65);
    addItemToMenu("img/000_menu_placeholder.png", "Basil shrimp pizza", "basil sauce / Anjia cheese / shrimp", 50);
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