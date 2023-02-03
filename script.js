var restart = document.getElementById("restart");
var data = document.querySelectorAll("td");


function clear(){
    for(var i=0; i<data.length; i++){
        data[i].textContent = '';
    }
} 
restart.addEventListener('click',clear);

function check(){
    
}