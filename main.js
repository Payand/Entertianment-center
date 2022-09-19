import { objApi } from "./api.js";

const render = (category, section) => {
  // Select cards container
  const categoryContainer = document.querySelector(`#${section}`);
  // Loop through  imported API
  for (let cat of category) {
    const cardsContent = document.createElement("div");
    cardsContent.className = "flex-movies-container";

    //Create image element
    const image = document.createElement("img");
    image.setAttribute("src", `./assets/img/${cat.img}`);
    image.setAttribute("alt", "poster");
    image.className = "img-card";

    // Create quality div tag
    const divQulity = document.createElement("div");
    divQulity.innerHTML = `${cat.quality}`;
    divQulity.className = "quality";

    // Create cards titles
    const categoryTitle = document.createElement("div");
    categoryTitle.className = "flex-card-box";
    const elementP = document.createElement("p");

    cat.title.length > 16
      ? (elementP.innerHTML = `${cat.title}`.substring(0, 16) + "...")
      : (elementP.innerHTML = `${cat.title}`);
    // Create cards details
    const categoryDetails = document.createElement("div");
    categoryDetails.className = "flex-card-box-details";
    categoryDetails.innerHTML = `<span>${cat.year}<i class='fa-solid fa-circle'></i>${cat.duration}</span>
  <span>${cat.type}</span>`;
    // Put all of them together
    categoryTitle.appendChild(elementP);
    categoryTitle.appendChild(categoryDetails);

    categoryContainer.appendChild(cardsContent);
    cardsContent.appendChild(image);
    cardsContent.appendChild(divQulity);
    cardsContent.appendChild(categoryTitle);
  }
};

render(objApi.movies, "movies");
render(objApi.tv, "tv");
render(objApi.documentary, "document");
