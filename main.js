import { movies } from "./api.js";

// select movie container which includes image and details.
const moviesContent = document.querySelector(".flex-movies-container");

// select movie title
const moviesTitle = document.querySelector(".flex-card-box");

// select movie details.
const movieDetails = document.querySelector(".flex-card-box-details");

//create image element
const image = document.createElement("img");
image.setAttribute("src", "./assets/img/bullet-train-movie.jpg");
image.setAttribute("alt", "poster");
image.className = "img-card";

// create quality div tag
const divQulity = document.createElement("div");
divQulity.innerHTML = "HD";
divQulity.className = "quality";

// create movie detail content
// const elemetPTag = document.createElement("p");
// elemetPTag.innerText = "Bullet Train";
// moviesTitle.appendChild(elemetPTag);

moviesContent.appendChild(image);
moviesContent.appendChild(divQulity);
// moviesContent.appendChild(moviesTitle);
