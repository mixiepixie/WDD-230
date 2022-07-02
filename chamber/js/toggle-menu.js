function toggleMenu(){
  navDisplay = document.getElementsByClassName("navigation");
  navDisplay[0].classList.toggle("responsive");
  
}

hamBtn = document.getElementsByClassName("hamburger");

hamBtn.addEventListener("click", toggleText);
   function toggleText() {
      var x = navDisplay[0];
      if (x.innerHTML === '&#9776;') {
         x.innerHTML = "X";
      } else {
         x.innerHTML = "&#9776";
      }
   }

// function toggleMenu(){
//   document.getElementById("primaryNav").classList.toggle("open");
// }s

// const x = document.getElementById('hamburgerBtn');
// x.onclick = toggleMenu;