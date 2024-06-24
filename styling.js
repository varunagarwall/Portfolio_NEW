document.addEventListener('scroll',checkscroll);
let animation=false;

var list=document.querySelectorAll('.nav-menu a');


for(var i=0;i<list.length;i++){
    list[i].addEventListener('click',function(event){
        event.preventDefault();
      var sectionid=this.textContent;
        var section=document.getElementById(sectionid);

  var interval=setInterval(function(){
    var sectioncord=section.getBoundingClientRect();

 if(sectioncord.top <0){
    clearInterval(interval);
    return;
 }

 window.scrollBy(0,50);
},50);
});
}

// 


var skill=document.getElementsByClassName('inner-container');

console.log(skill);

function skillbar() {
for(let i of skill){
  i.style.width=0+'%';
}
}

skillbar();

function fullheight(){
  for(let i of skill){
    var width=i.getAttribute('data-bar-width');
    let currenwidth=0;
    let interval=setInterval(function(){
 if(currenwidth>=width){
  clearInterval(interval);
  return;
 }
 currenwidth++;
 i.style.width=currenwidth+'%';
    },10)
  }
}

function checkscroll(){
  var skillsection=document.getElementById('Skill');

var cordinate=skillsection.getBoundingClientRect();
if(!animation && cordinate.top<window.innerHeight){
fullheight()
animation=true;
console.log('first')

}
else if(cordinate.top>window.innerHeight){
animation=false;
skillbar();
}
}
