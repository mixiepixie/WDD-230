// initialize display elements
const visitsDisplay = document.querySelector(".visits");
const daysSinceLastVisitDisplay = document.querySelector(".daysSinceLastVisit");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let numDaysStorageValue = Number(window.localStorage.getItem("millissincevisit-ls"));
console.log(numDaysStorageValue);

//set values for today's date and calculate one day in Milliseconds
const todayInMillis = new Date().getTime();
const oneDayInMillis = 24*60*60*1000;

//set initial value for date in storage(stored in milliseconds)
let numDaysMillis = new Date().getTime();


// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
	if (numDaysMillis !== 0){
		numDaysDayInt = Math.trunc((todayInMillis - numDaysStorageValue)/oneDayInMillis);
		daysSinceLastVisitDisplay.textContent = `It has been ${numDaysDayInt} days since your last visit.`
	}
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("millissincevisit-ls", numDaysMillis);



// function getYesterdayDate() {
//   return (new Date().getTime() - 48*60*60*1000);
// }

// console.log(getYesterdayDate());

// let numDaysMillis = getYesterdayDate();