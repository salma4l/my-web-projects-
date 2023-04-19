// create close btn
var myNodelist= document.getElementsByTagName("LI"); 
var i; 
for (i=0; i< myNodelist.length; i++){
var span = document.createElement("SPAN"); 
var txt = document.createTextNode("\u00D7"); 
span.className= "close"; 
span.appendChild(txt); 
myNodelist[i].appendChild(span); 
}
//click on close btn to hide item 
var close = document.getElementsByClassName("close"); 
var i; 
for (i=0;i<close.length; i++){
    close[i].onclick=function(){
        let div=this.parentElement; 
        div.style.display="none"; 

    }
}
//add check 
var list = document.querySelector('ul'); 
list.addEventListener('click',function(ev){
if (ev.target.tagName==='LI'){
    ev.target.classList.toggle('checked'); 
}
}, false);
//add btn
function newElement(){
    var li = document.createElement("li"); 
    var inputValue = document.getElementById("myInput").value; 
    var t= document.createTextNode(inputValue); 
    li.appendChild(t); 
    if (inputValue===''){
        alert("you must write something"); 
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value=""; 
    var span = document.createElement("SPAN"); 
    var txt= document.createTextNode("\u00D7"); 
    span.className= "close"; 
    span.appendChild(txt); 
    li.appendChild(span); 
    for (i=0; i<close.length; i++){
        close[i].onclick=function(){
            var div= this.parentElement; 
            div.style.display="none"; 
        }
    }
}
body.className=localStorage.getItem("stateMode"); 
function toggleDarkLight(){
    var body= document.getElementById("body"); 
    var currentClass= body.className; 
    body.className=currentClass=="dark-mode"?"light-mode":"dark-mode";
    localStorage.setItem("stateMode",body.className); 
}
