"use sctrict";

function startSearch() {
    let but = document.getElementById("search-button");
    let inp = document.getElementById("search-input");

    if (inp.style.visibility === "hidden" || inp.style.visibility === ""){
        inp.style.visibility = "visible";
        inp.style.borderRight = "none";
        but.style.backgroundColor = "#606060";
        but.style.backgroundImage = "url('../img/search-icon-active.svg')";
    } else {
        if (inp.value === ""){
            inp.style.visibility = "hidden";
            but.style.backgroundColor = "#fff";
            but.style.backgroundImage = "url('../img/search-icon.svg')";
        } else {
            window.location.href = "category-all.html?category=woman";
        }
    }

}

  
  
var list= document.getElementsByClassName('lookbook__menu');
var item = document.getElementsByClassName('lookbook__menu-item');
var left =  document.getElementById('arrow-left');
var right =   document.getElementById('arrow-right');
    
    
    for (var i = 0; i < item.length; i++) {
        item[i].style.position = 'relative';
        var span = document.createElement('span');
        span.style.cssText = 'position:absolute;left:0;top:0';
        span.innerHTML = i + 1;
        item[i].appendChild(span);
      }

var width = 50;
var count = 2;
      
var carousel = document.getElementsByClassName('lookbook__view');
var position = 0; 

left.onclick = function() {
    position = Math.min(position + width * count, 0)
    list[0].style.marginLeft = position + 'px';
}     
right.onclick = function() {
    position = Math.max(position - width * count, -width * (item.length - count));
    list[0].style.marginLeft = position + 'px';
}     