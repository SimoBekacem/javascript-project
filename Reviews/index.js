let personne1 = {
    image: 'src="/javascript-project/Reviews/images/person-1_rfzshl.jpg"',
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    comment: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
}
let  personne2 = {
    image: 'src="/javascript-project/Reviews/images/person-2_rfzshl.jpg"',
    name: "Anna Johnson",
    job: "WEB DEVELOPER",
    comment: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
}
let  personne3 = {
    image: 'src="/javascript-project/Reviews/images/person-3_rfzshl.jpg"',
    name: "Peter Jones",
    job: "INTERN",
    comment: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
}
let  personne4 = {
    image: 'src="/javascript-project/Reviews/images/person-4_rfzshl.jpg"',
    name: "Bill Anderson",
    job: "THE BOSS",
    comment: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
}
let html = "";
let list = [personne1,personne2,personne3,personne4];
let i=0;
let body = document.getElementById("body");

function move_left(){ 
    if(i===0){
        html=`
        <div class="div">
        <img style="border-radius: 0%;position: absolute;
        top: 20%;
        left: 40%;
        z-index: 1;" src="/javascript-project/Reviews/icon/PngItem_2150827.png" height="30px" width="30px">
        <img id style="position: relative;" ${list[3].image} width="150px" height="150px"><br>
        <h2 id="name">${list[3].name}</h2>
        <h2 class="job">${list[3].job}</h2>
        <p id="comment">${list[3].comment}
        </p>
        <ul>
            <li><button onclick="move_left()">&lt;</button></li>
            <li><button onclick="move_right()">&gt;</button></li>
        </ul>
        <button class="but">Surprise Me</button>
    </div>
    `
    i=3;
    }
    else{
        html=`
        <div class="div">
        <img style="border-radius: 0%;position: absolute;
        top: 20%;
        left: 40%;
        z-index: 1;" src="/javascript-project/Reviews/icon/PngItem_2150827.png" height="30px" width="30px">
        <img id style="position: relative;" ${list[i-1].image} width="150px" height="150px"><br>
        <h2 id="name">${list[i-1].name}</h2>
        <h2 class="job">${list[i-1].job}</h2>
        <p id="comment">${list[i-1].comment}
        </p>
        <ul>
            <li><button onclick="move_left()">&lt;</button></li>
            <li><button onclick="move_right()">&gt;</button></li>
        </ul>
        <button class="but">Surprise Me</button>
    </div>
    `
    i--;
    }
    body.innerHTML=html;
}
function move_right(){ 
    if(i===3){
        html=`
        <div class="div">
        <img style="border-radius: 0%;position: absolute;
        top: 20%;
        left: 40%;
        z-index: 1;" src="/javascript-project/Reviews/icon/PngItem_2150827.png" height="30px" width="30px">
        <img id style="position: relative;" ${list[0].image} width="150px" height="150px"><br>
        <h2 id="name">${list[0].name}</h2>
        <h2 class="job">${list[0].job}</h2>
        <p id="comment">${list[0].comment}
        </p>
        <ul>
            <li><button onclick="move_left()">&lt;</button></li>
            <li><button onclick="move_right()">&gt;</button></li>
        </ul>
        <button class="but">Surprise Me</button>
    </div>
    `
    i=0;
    }
    else{
        html=`
        <div class="div">
        <img style="border-radius: 0%;position: absolute;
        top: 20%;
        left: 40%;
        z-index: 1;" src="/javascript-project/Reviews/icon/PngItem_2150827.png" height="30px" width="30px">
        <img id style="position: relative;" ${list[i+1].image} width="150px" height="150px"><br>
        <h2 id="name">${list[i+1].name}</h2>
        <h2 class="job">${list[i+1].job}</h2>
        <p id="comment">${list[i+1].comment}
        </p>
        <ul>
            <li><button onclick="move_left()">&lt;</button></li>
            <li><button onclick="move_right()">&gt;</button></li>
        </ul>
        <button class="but">Surprise Me</button>
    </div>
    `
    i++;
    }
    body.innerHTML=html;
}

