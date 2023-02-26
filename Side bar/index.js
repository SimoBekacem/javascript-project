const sidebar = document.querySelector('.sidebar');
let button = document.getElementById("button");
let test = false
let close = document.querySelector('.close');
button.addEventListener('click',function(){
    if(test == false){
        sidebar.style.left="0";
        test = true
    }
    else{
        sidebar.style.left="-100vh";
        test = false
    }
    
    console.log("hello")
})
close.addEventListener('click',function(){
    sidebar.style.left="-100vh";
    test = false
})





// const sidebar = document.querySelector('.sidebar');
// const openSidebarButton = document.querySelector('.open-sidebar');

// openSidebarButton.addEventListener('click', function() {
//     sidebar.classList.toggle('open');
// });
