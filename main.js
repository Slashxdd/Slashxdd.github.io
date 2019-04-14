function menu() {
   var elems = document.getElementsByClassName("header__menu");
   for(var i=0; i<elems.length; i++){
       if (elems[i].style.display != 'inline-block')
       elems[i].style.display='inline-block';
       else {elems[i].style.display='none'}
    }
}