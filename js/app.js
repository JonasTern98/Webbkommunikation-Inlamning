//API - Moviename & Release date
let movies = [];
const movieInfo = document.getElementsByClassName("movie-info");
const movieModalHeader = document.getElementsByClassName("modal-header");

const getMovies = async () => {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  data.results.forEach((movie) => {
    movies.push(movie);
  });
  for (let i = 0; i < movieInfo.length; i++) {
    movieInfo[
      i
    ].innerHTML = `<h1 onclick="showMovie(${i})">${movies[i].title}</h1><h2>${movies[i].release_date}</h2>`;
    movieInfo[i].parentElement.addEventListener("click", () => {
      showMovie(`${i}`)
    }) 
  }
};

window.addEventListener("load", () => {
  getMovies();
});

//API - Characters
const charPromises = (i) => {
  const promises = movies[i].characters.map((url) => {
    return fetch(url).then((res) => res.json());
  });
  return promises;
};

showMovie = async (i) => {
  try {
    const res = await Promise.all(charPromises(i));

    document.getElementsByClassName("modal-info")[0].innerHTML =
    res.map((item) => `<p>${item.name}</p>`).sort().join("");
  } catch (error) {
    document.getElementsByClassName("modal-info")[0].innerHTML = "<h1>Something went wrong...</h1>";
  }
};

  //LEFT AND RIGHT BUTTONS
  const rowOne = document.getElementsByClassName("row-one")[0];
  const rowTwo = document.getElementsByClassName("row-two")[0];
  const dotOne = document.getElementsByClassName("dot-one")[0];
  const dotTwo = document.getElementsByClassName("dot-two")[0];

  function rightClick() {
    if (rowOne.style.display !== "none") {
    rowOne.style.display = "none";
    rowTwo.style.display = "flex";
    dotOne.style.backgroundColor = "transparent";
    dotTwo.style.backgroundColor = "#f8da2b";
    dotOne.style.borderRadius = "0";
    dotTwo.style.borderRadius = "10px";
  } else {
    rowTwo.style.display = "none";
    rowOne.style.display = "flex";
    dotTwo.style.backgroundColor = "transparent";
    dotOne.style.backgroundColor = "#f8da2b";
    dotTwo.style.borderRadius = "0";
    dotOne.style.borderRadius = "10px";
  }
}

function leftClick() {
  if (rowOne.style.display !== "none") {
    rowOne.style.display = "none";
    rowTwo.style.display = "flex";
    dotOne.style.backgroundColor = "transparent";
    dotTwo.style.backgroundColor = "#f8da2b";
    dotOne.style.borderRadius = "0";
    dotTwo.style.borderRadius = "10px";
  } else {
    rowTwo.style.display = "none";
    rowOne.style.display = "flex";
    dotTwo.style.backgroundColor = "transparent";
    dotOne.style.backgroundColor = "#f8da2b";
    dotTwo.style.borderRadius = "0";
    dotOne.style.borderRadius = "10px";
  }
}

// function rotation(){
  //     setInterval(() => {
    //         rightClick()
    //       }, 8000);
    // }

    // rotation()

    //-------------------------------

    //MOVIE MODAL
const movieModal = document.getElementById("modal");
const modalSection = document.getElementById("modal-section");
const homepageSection = document.getElementById("content-container");
const aNewHope = document.getElementsByClassName("new-hope-modal")[0];
const empireStrikes = document.getElementsByClassName(
  "empire-strikes-modal"
)[0];
const returnJedi = document.getElementsByClassName("return-jedi-modal")[0];
const phantomMenace = document.getElementsByClassName(
  "phantom-menace-modal"
  )[0];
  const attackClones = document.getElementsByClassName("attack-clones-modal")[0];
const revengeSith = document.getElementsByClassName("revenge-sith-modal")[0];

function openModal() {
  setTimeout(() => {
    document.getElementsByClassName("lightsabers")[0].style.display = "block";
  }, 450);
  setTimeout(() => {
    movieModal.style.display = "flex";
  }, 3000);
  showMovie();
}

function exitModal() {
  homepageSection.scrollIntoView();
  homepageSection.style.display = "block";
  document.getElementsByClassName("lightsabers")[0].style.display = "none";
  movieModal.style.display = "none";
  aNewHope.style.display = "none";
  empireStrikes.style.display = "none";
  returnJedi.style.display = "none";
  phantomMenace.style.display = "none";
  attackClones.style.display = "none";
  revengeSith.style.display = "none";
}
//------------------------------

//MOVIES
function movieOne() {
  modalSection.scrollIntoView();
  openModal();
  setTimeout(() => {
    aNewHope.style.display = "flex";
  }, 3000);
}
function movieTwo() {
  modalSection.scrollIntoView();
  openModal();
  setTimeout(() => {
    empireStrikes.style.display = "flex";
  }, 3000);
}
function movieThree() {
  modalSection.scrollIntoView();
  openModal();
  setTimeout(() => {
    returnJedi.style.display = "flex";
  }, 3000);
}
function movieFour() {
  modalSection.scrollIntoView();
  openModal();
  setTimeout(() => {
    phantomMenace.style.display = "flex";
  }, 3000);
}
function movieFive() {
  modalSection.scrollIntoView();
  openModal();
  setTimeout(() => {
    attackClones.style.display = "flex";
  }, 3000);
}
function movieSix() {
  modalSection.scrollIntoView();
  openModal();
  setTimeout(() => {
    revengeSith.style.display = "flex";
  }, 3000);
}
//------------------------------
