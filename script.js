
var elem=document.querySelector("#face");

var vertical=document.createElement("path");
 vertical.setAttribute("id","vertical");
 vertical.setAttribute("d","'M50 300 V50000'");  

var horizontal=document.createElement("path");
 vertical.setAttribute("id","horizontal");
 vertical.setAttribute("d","'M50 300 H50000'");      
   var v=0;
   var r=0;

function rotate() {
    var innerArrow = document.getElementById("clock");
    innerArrow.setAttribute("transform", "rotate("+r+")");
    r+=1.24;
}
function divVertical(){
    if (v==0){
          v+=5;
     elem.innerHTML+="<path id='vertical' d='M300 50 V"+v+"'></path>";
          elem.innerHTML+="<path id='horizontal' d='M50 300 H"+v+"'></path>";
    }
        else if (v<550){
    v+=5;
    elem.querySelector("#vertical").setAttribute("d","M300 50 V"+v);
            
    elem.querySelector("#horizontal").setAttribute("d","M50 300 H"+v);   
            
   rotate();
            
       //elem.innerHTML+="<path id='vertical' d='M300 50 V"+v+"'></path>";     
            
}
    }

    


setInterval('divVertical()',10);
