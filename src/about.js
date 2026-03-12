export const loadAbout = function () {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.className = "";
    content.classList.add("about");

    const hours = document.createElement("section");
    hours.classList.add("hours");

    const hoursH2 = document.createElement("h2");
    hoursH2.textContent = "Opening Hours";

    const p1 = document.createElement("p");
    p1.textContent = "Monday – Sunday";

    const p2 = document.createElement("p");
    p2.textContent = "11:00 AM – 10:30 PM";

    hours.append(hoursH2, p1, p2);

    const location = document.createElement("section");
    location.classList.add("location");

    const locationH2 = document.createElement("h2");
    locationH2.textContent = "Locations";

    const locationGrid = document.createElement("div");
    locationGrid.classList.add("location-grid");

    const locationCard1 = document.createElement("div");
    locationCard1.classList.add("location-card");

    const loc1H3 = document.createElement("h3");
    loc1H3.textContent = "Gulou Branch";

    const loc1P1 = document.createElement("p");
    loc1P1.classList.add("address-en");
    loc1P1.textContent = "Hankou Xi Lu, Gulou District, Nanjing, Jiangsu, China";

    const loc1P2 = document.createElement("p");
    loc1P2.classList.add("address-zh");
    loc1P2.textContent = "中国江苏省南京市鼓楼区汉口西路";

    locationCard1.append(loc1H3, loc1P1, loc1P2);

    const locationCard2 = document.createElement("div");
    locationCard2.classList.add("location-card");

    const loc2H3 = document.createElement("h3");
    loc2H3.textContent = "Jiangning Branch";

    const loc2P1 = document.createElement("p");
    loc2P1.classList.add("address-en");
    loc2P1.textContent = "No. 44, 1st Floor, Building 3, Area A, Yiwu Small Commodity City, Chunhua Street, Jiangning District, Nanjing, China";

    const loc2P2 = document.createElement("p");
    loc2P2.classList.add("address-zh");
    loc2P2.textContent = "江宁区淳化街道义乌小商品城A区3栋1层44号";

    locationCard2.append(loc2H3, loc2P1, loc2P2);

    locationGrid.append(locationCard1, locationCard2);
    location.append(locationH2, locationGrid);

    content.append(hours, location);
};