let color = document.getElementById("color_name");
let button = document.getElementById("changing_button");
let body = document.getElementById("body");
let list = []
function changing(){
    list=[]
    let color2=0;
    for(let i=0;i<3;i++){
        color2=Math.floor(Math.random()*256);
        console.log(color2)
        list.push(color2);
    }
    console.log("rgb("+list[0]+","+list[1]+","+list[2]+")");
    color.innerText="rgb("+list[0]+","+list[1]+","+list[2]+")";
    color.style.color="rgb("+list[0]+","+list[1]+","+list[2]+")"
    body.style.backgroundColor="rgb("+list[0]+","+list[1]+","+list[2]+")"
} 
    