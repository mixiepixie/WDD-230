
{/* <div><img class="logo" src="images/bench_logo.png" alt="logo Better Bentonville"><h3>Company Name</h3><p>Lorem ipsum dolor sit amet<br>consectetur adipisicing elit. <br>Nesciunt illum beatae quis<br>culpa aliquid blanditiis sequi<br>quibusdam, quidem animi</p></div> */}

fetch('js/data.json')
	.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
		const companies = jsonObject['companies'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
		companies.forEach(displayCompanies);
  });

function displayCompanies(company){
	divCardsDisplay = document.querySelector('.directoryGrid');
	createCard = document.createElement('div');
	companyImg = document.createElement('img');
	companyName = document.createElement('h3');
	companyAdd = document.createElement('p');
	companyTel = document.createElement('p');
	companyWebURL = document.createElement('a');

	companyImg.classList.add("logo");
	companyImg.setAttribute('src', company.imageurl);
	companyImg.setAttribute('alt', `${company.company} logo`);
	companyWebURL.setAttribute('href', company.websiteurl);

	companyName.textContent = company.company;
	companyAdd.textContent = company.address;
	companyTel.textContent = company.telnum;
	companyWebURL.textContent = company.websiteurl;
	console.log(companyWebURL);

	divCardsDisplay.appendChild(createCard);
	createCard.appendChild(companyImg);
	createCard.appendChild(companyName);
	createCard.appendChild(companyAdd);
	createCard.appendChild(companyTel);
	createCard.appendChild(companyWebURL);

};






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
