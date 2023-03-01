let button = document.querySelector(".menu_icon")
let header = document.querySelector("header")
let menu = document.querySelector(".menu")
let test = false
button.addEventListener('click',function(){
    if(test==false){
        menu.style.display="block";
        test=true
    }
    else{
        menu.style.display="none";
        test = false
    }
})
window.onscroll = function() {
    // Get the current vertical scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Check if the scroll position is greater than or equal to a certain value
    if (scrollPosition >= 90) {
      // Do something
        header.style.position='fixed';
        console.log(scrollPosition)
    }
    else if (scrollPosition <= 90){
        header.style.position='static';
        console.log(scrollPosition)
    }
};