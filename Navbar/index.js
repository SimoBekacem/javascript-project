let link = document.getElementById("not")
let not = document.getElementById("nott")
let open1 = document.getElementById("open")
let header = document.getElementById("header")
link.addEventListener("click", function() {
    not.style.display="block";
    header.style.display="none";
})
open1.addEventListener("click", function() {
    not.style.display="none";
    header.style.display="flex";
})
let images = document.getElementById("images")
let links = document.getElementById("links")
window.addEventListener('resize', function() {
    // Get the width of the window
    const windowWidth = window.innerWidth;
  
    // Check if the window width is less than 768 pixels (i.e. the window is in mobile mode)
    if (windowWidth < 740) {
      // Do something for mobile devices
      images.style.display="none";
      li.style.display="c"

      console.log('Mobile mode');
    } else {
      // Do something for desktop devices
      console.log('Desktop mode');
      images.style.display="block";
    }
  });