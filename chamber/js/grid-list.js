





const data = require('./data.json');
console.log(data);




// buttons

const gridbutton = document.getElementById('grid');
const listbutton = document.getElementById('list');
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("directoryGrid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("directoryGrid");
}
