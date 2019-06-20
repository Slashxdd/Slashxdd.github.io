"use sctrict";

/* function for search button */
function startSearch() {
    let but = document.getElementById("search-button");
    let inp = document.getElementById("search-input");
    let swrap = document.getElementsByClassName("header__search");
    let nav = document.getElementsByTagName("nav");
    let headerHr = document.getElementById("headerHr");

    if (inp.style.visibility === "hidden" || inp.style.visibility === ""){
        inp.style.visibility = "visible";
        inp.style.borderRight = "none";
        but.style.backgroundColor = "#606060";
        but.style.backgroundImage = "url('../img/search-icon-active.svg')";
        if (document.documentElement.clientWidth < 768) {
            swrap[0].style.position = "absolute";
            swrap[0].style.width = "100%";
            swrap[0].style.margin = "0 2.42%";
            swrap[0].style.left = 0;
            swrap[0].style.top = "115px";
            inp.style.width = "87%";
            nav[0].style.top = "155px";
            headerHr.style.marginTop = "50px";
        }
    } else {
        if (inp.value === ""){
            inp.style.visibility = "hidden";
            but.style.backgroundColor = "#fff";
            but.style.backgroundImage = "url('../img/search-icon.svg')";
            swrap[0].style.removeProperty("position");
            swrap[0].style.removeProperty("width");
            swrap[0].style.removeProperty("margin");
            swrap[0].style.removeProperty("left");
            swrap[0].style.removeProperty("top");
            inp.style.removeProperty("width");
            nav[0].style.removeProperty("top");
            headerHr.style.removeProperty("margin");
        } else {
            window.location.href = "category-all.html?category=woman";
        }
    }

}

/* slider */

var list = document.getElementsByClassName('lookbook__menu');
var item = document.getElementsByClassName('lookbook__menu-item');
var left = document.getElementById('arrow-left');
var right = document.getElementById('arrow-right');
    
    
    for (var i = 0; i < item.length; i++) {
        item[i].style.position = 'relative';
        var span = document.createElement('span');
        span.style.cssText = 'position:absolute;left:0;top:0';
        span.innerHTML = i + 1;
        item[i].appendChild(span);
      }

var width = 100;
var count = 1;
      
var carousel = document.getElementsByClassName('lookbook__view');
var position = 0; 

if (left !== null && right !== null) {
    left.onclick = function() {
        position = Math.min(position + width * count, 0)
        list[0].style.marginLeft = position + 'px';
    }     
    right.onclick = function() {
        position = Math.max(position - width * count, -width * (item.length - count));
        list[0].style.marginLeft = position + 'px';
    }   
}

  