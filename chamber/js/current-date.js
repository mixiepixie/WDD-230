// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



// annoucement tues and wed only
const banner = document.getElementById("banner");
const weekday = now.getDay();
// const weekday = 2;

if (weekday === 1 || weekday === 2){
	banner.innerHTML = `<h3>Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</h3>`;
}
else{
	banner.style.display = 'none';
}
// console.log(weekday);

// document.getElementById('pcontainer').innerHTML = '<p>new paragraph</p>' + document.getElementById('pcontainer').innerHTML;



//