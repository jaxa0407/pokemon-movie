let elPokemon = document.querySelector("#pokemon");
let elMovies = document.querySelector("#movies");
let elBoth = document.querySelector("#both");
let elClear = document.querySelector("#clear");
let elList = document.querySelector("#list");
let elTotal = document.querySelector("#total");
let pokemonLogo = document.querySelector(".pokemonlogo");
let moviesLogo = document.querySelector(".movieslogo");
let logoWrapper = document.querySelector("#logoWrapper");
let elNeed = document.querySelector("#need");
let elBody = document.querySelector("body");
let thePokemon = pokemons.slice(0, 50);
let theMovie = movies.slice(0, 50);
 
elPokemon.addEventListener("click" , function pokemonRender(array) {
    render(thePokemon)
	pokemonLogo.classList.remove("d-none");
	pokemonLogo.classList.add("pokemonSolo");
	moviesLogo.classList.add("d-none");
	logoWrapper.classList.remove("both");
	elNeed.textContent = null;
	elBody.classList.remove("bg-info");
})

elMovies.addEventListener("click" , function moviesRender(array) {
    render(theMovie)
	pokemonLogo.classList.add("d-none");
	moviesLogo.classList.remove("d-none");
	moviesLogo.classList.add("moviesSolo");
	logoWrapper.classList.remove("both");
	elNeed.textContent = null;
})

elBoth.addEventListener("click" , function bothRender(array) {
	let newArray = thePokemon.concat(theMovie);
    render(newArray);
	pokemonLogo.classList.remove("d-none");
	moviesLogo.classList.remove("d-none");
	moviesLogo.classList.remove("moviesSolo");
	pokemonLogo.classList.remove("pokemonSolo");
	logoWrapper.classList.add("both");
	elNeed.textContent = null;
})

elClear.addEventListener("click" , function clearRender(array) {
	elTotal.innerHTML = 0
	elList.innerHTML = null
	pokemonLogo.classList.add("d-none");
	moviesLogo.classList.add("d-none");
	moviesLogo.classList.remove("moviesSolo");
	pokemonLogo.classList.remove("pokemonSolo");
	logoWrapper.classList.remove("both");
	elNeed.textContent = "Choose category";
	elBody.classList.add("back");
})

function render(array) {
	elList.innerHTML  = null;
	elTotal.innerHTML = array.length;
    for (let i = 0; i < array.length; i++) {
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");
        let newH = document.createElement("h3");
        let newP = document.createElement("p");
        let newP1 = document.createElement("p");
        let newP2 = document.createElement("p");
		let newTrailer = document.createElement("a");
		let newBookmark = document.createElement("a");
		let newInfo = document.createElement("a");
        elList.appendChild(newLi);
        newLi.classList.add("mb-5","align-items-center" ,"d-flex" ,"flex-column","justify-content-start");
        newLi.appendChild(newImg);
		newH.classList.add("text1","mb-1", "fs-6", "text-white", "text-bg-info" ,"m-0", "w-100");
		newLi.appendChild(newH);
		newLi.appendChild(newP);
		newLi.appendChild(newP1);
		newLi.appendChild(newP2);
		newLi.appendChild(newTrailer);
		newLi.appendChild(newBookmark);
		newLi.appendChild(newInfo);
		if (array[i].name) {
			newImg.src = array[i].img;
			newH.textContent = array[i].name;
			newImg.classList.add("imgpok","w-100", "rounded-top");
			newP.textContent = array[i].height;
			newP.classList.add("text2");
			newP1.textContent = array[i].weight;
			newP1.classList.add("text2" , "text-center");
			newP2.textContent = array[i].type;
			newP2.classList.add("text-wrap","text3");
		}
		else {
			newImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg`;
			newImg.classList.add("w-100" ,"rounded-top");
			newH.textContent = array[i].Title;
			newP.textContent = array[i].movie_year;
			newImg.width = 223.5;
			newImg.height = 125.5;
			newP.classList.add("text2");
			let fixedText = array[i].Categories.split("|").join(" ");
			newP1.textContent = fixedText;
			newP1.classList.add("text2" , "text-center");
			newP2.textContent = `Rating: ${array[i].imdb_rating}`;
			newP2.classList.add("text-wrap","text2");
            newTrailer.textContent = "Watch trailer";
            newBookmark.textContent = "Bookmarks";
            newInfo.textContent = "More info";
            newTrailer.href= `https://www.youtube.com/watch?v=${array[i].ytid}`;
            newTrailer.target = "_blank";
			newTrailer.classList.add("btn","btn-sm", "w-75","btn-outline-primary");
			newBookmark.classList.add("btn","w-75","btn-sm", "btn-outline-danger");
			newInfo.classList.add("btn", "w-75","btn-sm","btn-outline-info");
		}
    }
}