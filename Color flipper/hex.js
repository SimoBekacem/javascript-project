let color = document.getElementById("color_name");
let button = document.getElementById("changing_button");
let body = document.getElementById("body");
let list = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
function changing(){
    let color1='#';
    for(let i=0;i<6;i++){
        color1+=list[Math.floor((Math.random())*15)]
    }
    console.log(color1);
    color.innerText=" "+color1
    color.style.color=color1
    body.style.backgroundColor=color1
    
}
