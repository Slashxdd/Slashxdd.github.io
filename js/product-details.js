"use sctrict";

var url_string = window.location.href; 
var url = new URL(url_string);
var paramValue = url.searchParams.get("id");

var productPhotos = document.getElementsByClassName("product__photos-item");
var productName = document.getElementById("product-name");
var productArticle = document.getElementById("product-article");
var productPrice = document.getElementById("product-price");
var productDesc = document.getElementById("product-desc");
var previewWrapp = document.getElementById("preview-wrapp");
var productObj;

var radios = document.getElementsByClassName("radios");
var labels = document.getElementsByClassName("labels");
var toCart = document.getElementById("toCart");

function checkRadio(value) {
    for (let i = 0; i < labels.length; i++){
        labels[i].style.background = "#fff";
    }
    if (value === "38") {
        labels[0].style.background = "#e5e5e5";
        toCart.dataset.size = value;
    } else if (value === "39") {
        labels[1].style.background = "#e5e5e5";
        toCart.dataset.size = value;
    } else if (value === "40") {
        labels[2].style.background = "#e5e5e5";
        toCart.dataset.size = value;
    } else if (value === "41") {
        labels[3].style.background = "#e5e5e5";
        toCart.dataset.size = value;
    } else if (value === "42") {
        labels[4].style.background = "#e5e5e5";
        toCart.dataset.size = value;
    }
}

for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].id.toString() === paramValue) {
       productObj = catalog[i];
    }
}

for (let i = 0; i < productPhotos.length; i++) {
    productPhotos[i].firstChild.src = productObj.preview[i];
    productPhotos[i].firstChild.addEventListener("click", function() {
        tmp = this.src;
        this.src = previewWrapp.style.backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1];
        previewWrapp.style.backgroundImage = "url(" + tmp + ")";
    });
}

previewWrapp.style.backgroundImage = "url(" + productPhotos[0].firstChild.src + ")";

productName.innerText = productObj.name;
productArticle.innerText += productObj.id.toString();
productPrice.innerText = productObj.price;
productDesc.innerText = productObj.desc;

