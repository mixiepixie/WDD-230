// initialize display elements

const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.

// how should this be improved?
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


/////////////
//# of days since last visit
const daysSinceLastVisitDisplay = document.querySelector(".daysSinceLastVisit");
const todayInMillis = new Date().getTime();
const oneDayInMillis = 24*60*60*1000;

let date1 = new Date();
let date1InMillis = date1.getTime();

localStorage.setItem("lastdayvisited", date1InMillis);
lastDayVisited = Number(window.localStorage.getItem("lastdayvisited"));

numDaysSinceLastVisitinMillis = todayInMillis - lastDayVisited;
numDaysSinceLastVisit = numDaysSinceLastVisitinMillis / oneDayInMillis;

daysSinceLastVisitDisplay.textContent = numDaysSinceLastVisit;

localStorage.setItem("lastdayvisited", date1InMillis);

