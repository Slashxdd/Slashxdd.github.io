"use sctrict";

/* for getting parametrs value from get query in url */
var paramValue;

if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    var query = window.location.search.substring(1);
    qs = parse_query_string(query);
    paramValue = qs.category;
} else {
    var url_string = window.location.href; 
    var url = new URL(url_string);
    paramValue = url.searchParams.get("category");
}

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      // If first entry with this name
      if (typeof query_string[key] === "undefined") {
        query_string[key] = decodeURIComponent(value);
        // If second entry with this name
    } else if (typeof query_string[key] === "string") {
        var arr = [query_string[key], decodeURIComponent(value)];
        query_string[key] = arr;
        // If third or later entry with this name
    } else {
        query_string[key].push(decodeURIComponent(value));
    }
    }
    return query_string;
}

/* clicking on appropriate category will display appropriate items from catalog */

var coatsItem = document.getElementsByClassName("coats__item");
var coatsExample = document.getElementsByClassName("coats__example");
var coatsTitle = document.getElementsByClassName("coats__title");
var coatsPrice = document.getElementsByClassName("coats__price");

var outwearItem = document.getElementsByClassName("outerwear__item");
var outwearExample = document.getElementsByClassName("outerwear__example");
var outwearTitle = document.getElementsByClassName("outwear__title");
var outwearPrice = document.getElementsByClassName("outwear__price");

var tshirtsItem = document.getElementsByClassName("tshirts__item");
var tshirtsExample = document.getElementsByClassName("tshirts__example");
var tshirtsTitle = document.getElementsByClassName("tshirts__title");
var tshirtsPrice = document.getElementsByClassName("tshirts__price");

if (paramValue === "woman") {
    let coats = [];
    let outwear = [];
    let tshirts = [];

    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].category === "woman" && catalog[i].type === "coats"){
            coats.push(catalog[i]);
        } else if (catalog[i].category === "woman" && catalog[i].type === "outwear") {
            outwear.push(catalog[i]);
        } else if (catalog[i].category === "woman" && catalog[i].type === "tshirts") {
            tshirts.push(catalog[i]);
        }
    }
    
    for (let i = 0; i < coatsItem.length; i++) {
        coatsExample[i].firstChild.nextSibling.src = coats[i].image;
        outwearExample[i].firstChild.nextSibling.src = outwear[i].image;
        tshirtsExample[i].firstChild.nextSibling.src = tshirts[i].image;
        coatsExample[i].firstChild.nextSibling.alt = coats[i].name;
        outwearExample[i].firstChild.nextSibling.alt = outwear[i].name;
        tshirtsExample[i].firstChild.nextSibling.alt = tshirts[i].name;

        coatsTitle[i].innerText = coats[i].name;
        outwearTitle[i].innerText = outwear[i].name;
        tshirtsTitle[i].innerText = tshirts[i].name;

        coatsPrice[i].innerText = coats[i].price;
        outwearPrice[i].innerText = outwear[i].price;
        tshirtsPrice[i].innerText = tshirts[i].price;

        coatsItem[i].firstChild.nextSibling.href = "product-details.html?id=" + coats[i].id;
        outwearItem[i].firstChild.nextSibling.href = "product-details.html?id=" + outwear[i].id;
        tshirtsItem[i].firstChild.nextSibling.href = "product-details.html?id=" + tshirts[i].id;
    }

} else if (paramValue === "men") {
    let coats = [];
    let outwear = [];
    let tshirts = [];

    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].category === "men" && catalog[i].type === "coats"){
            coats.push(catalog[i]);
        } else if (catalog[i].category === "men" && catalog[i].type === "outwear") {
            outwear.push(catalog[i]);
        } else if (catalog[i].category === "men" && catalog[i].type === "tshirts") {
            tshirts.push(catalog[i]);
        }
    }
    
    for (let i = 0; i < coatsItem.length; i++) {
        coatsExample[i].firstChild.nextSibling.src = coats[i].image;
        outwearExample[i].firstChild.nextSibling.src = outwear[i].image;
        tshirtsExample[i].firstChild.nextSibling.src = tshirts[i].image;
        coatsExample[i].firstChild.nextSibling.alt = coats[i].name;
        outwearExample[i].firstChild.nextSibling.alt = outwear[i].name;
        tshirtsExample[i].firstChild.nextSibling.alt = tshirts[i].name;

        coatsTitle[i].innerText = coats[i].name;
        outwearTitle[i].innerText = outwear[i].name;
        tshirtsTitle[i].innerText = tshirts[i].name;

        coatsPrice[i].innerText = coats[i].price;
        outwearPrice[i].innerText = outwear[i].price;
        tshirtsPrice[i].innerText = tshirts[i].price;

        coatsItem[i].firstChild.nextSibling.href = "product-details.html?id=" + coats[i].id;
        outwearItem[i].firstChild.nextSibling.href = "product-details.html?id=" + outwear[i].id;
        tshirtsItem[i].firstChild.nextSibling.href = "product-details.html?id=" + tshirts[i].id;
    }    

} else if (paramValue === "kids") {
    let coats = [];
    let outwear = [];
    let tshirts = [];

    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].category === "kids" && catalog[i].type === "coats"){
            coats.push(catalog[i]);
        } else if (catalog[i].category === "kids" && catalog[i].type === "outwear") {
            outwear.push(catalog[i]);
        } else if (catalog[i].category === "kids" && catalog[i].type === "tshirts") {
            tshirts.push(catalog[i]);
        }
    }
    
    for (let i = 0; i < coatsItem.length; i++) {
        coatsExample[i].firstChild.nextSibling.src = coats[i].image;
        outwearExample[i].firstChild.nextSibling.src = outwear[i].image;
        tshirtsExample[i].firstChild.nextSibling.src = tshirts[i].image;
        coatsExample[i].firstChild.nextSibling.alt = coats[i].name;
        outwearExample[i].firstChild.nextSibling.alt = outwear[i].name;
        tshirtsExample[i].firstChild.nextSibling.alt = tshirts[i].name;

        coatsTitle[i].innerText = coats[i].name;
        outwearTitle[i].innerText = outwear[i].name;
        tshirtsTitle[i].innerText = tshirts[i].name;

        coatsPrice[i].innerText = coats[i].price;
        outwearPrice[i].innerText = outwear[i].price;
        tshirtsPrice[i].innerText = tshirts[i].price;

        coatsItem[i].firstChild.nextSibling.href = "product-details.html?id=" + coats[i].id;
        outwearItem[i].firstChild.nextSibling.href = "product-details.html?id=" + outwear[i].id;
        tshirtsItem[i].firstChild.nextSibling.href = "product-details.html?id=" + tshirts[i].id;
    }  
}