let history={
    name:'history',
    comment:'I m baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.',
    list:[],
}
let Vision={
    name:'Vision',
    comment:'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.',
    list:['list item','list item','list item'],
}
let Goals={
    name:'Goals',
    comment:'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.',
    list:[],
}
let one =  document.querySelector(".one");
let tow =  document.querySelector(".tow");
let three =  document.querySelector(".three");
let tr1 =  document.querySelector(".tr1");
function show(variable){
    tr1.innerHTML=`<tr class="tr1">
    <td colspan="3">
        <h2>${variable.name}</h2>
        <p>${variable.comment}</p>
    </td>
</tr> `
}
one.addEventListener('click',function(){
    show(history);
    one.style.backgroundColor="white"
    one.style.color="black"
    tow.style.backgroundColor="dodgerblue"
    tow.style.color="black"
    three.style.backgroundColor="dodgerblue"
    three.style.color="black"
})
tow.addEventListener('click',function(){
    show(Vision);
    tow.style.backgroundColor="white"
    tow.style.color="black"
    one.style.backgroundColor="dodgerblue"
    one.style.color="black"
    three.style.backgroundColor="dodgerblue"
    three.style.color="black"
})
three.addEventListener('click',function(){
    show(Goals);
    three.style.backgroundColor="white"
    three.style.color="black"
    one.style.backgroundColor="dodgerblue"
    one.style.color="black"
    tow.style.backgroundColor="dodgerblue"
    tow.style.color="black"
})