"use sctrict";

/* checking user agent for fixing elem.remove() in IE and EDGE */ 
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    var isIe = true;
}

var price = document.getElementById("basket-count");
var content = document.getElementsByClassName("basket__table-body");
var bagPrice = document.getElementsByClassName("basket__total-price");
var form = document.getElementsByClassName("product__form");
var orderBut = document.getElementsByClassName("basket__order-button");
window.onload = function() {
    if (localStorage.getItem("basket") === null) {
        localStorage.setItem("basket", []); 
    }
    renderCount();
    if (content[0] !== undefined){
        renderBasket();
    }
}


/* get data from local storage */
function getCartData(){
    try {
        JSON.parse(localStorage.getItem('basket'));
    } catch (error) {
        return [];
    }
    return JSON.parse(localStorage.getItem('basket'));
}

/*set data to local storage */

function setCartData(o){
    localStorage.setItem('basket', JSON.stringify(o));
    return false;
}

function toBag() {
    var cartData = getCartData();
    if (toCart.dataset.size === undefined) {
        if (document.body.contains(document.getElementById("error"))){
            return false;
        }
        let error = document.createElement("span");
        error.innerText = "You should to chose a size!";
        error.style.color = "red";
        error.style.display = "block";
        error.style.marginTop = "10px";
        error.id = "error";
        form[0].insertBefore(error, toCart);
        return false;
    }
    let item = {
        id: paramValue,
        size: toCart.dataset.size,
        count: 1
    }

    if (document.body.contains(document.getElementById("error"))){
        if (isIe) {
            document.getElementById("error").remove = function() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        document.getElementById("error").remove();
    }
    
    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id === item.id && cartData[i].size === item.size) {
            cartData[i].count += 1;
            toCart.style.background = "rgb(0,128,0)";
            toCart.value = "PRODUCT ADDED";
            setCartData(cartData);
            toCart.disabled = true;
            renderCount();
            return false;
        }
    }

    cartData.push(item);
    try {
       setCartData(cartData);
      } catch (e) {
        console.log("Local storage is full");
    }
    toCart.style.background = "rgb(0,128,0)";
    toCart.value = "PRODUCT ADDED";
    toCart.disabled = true;
    renderCount();
}

/* updating item counts */

function renderCount() {
    let tmpArr = getCartData();
    let count = 0;
    for (let i = 0; i < tmpArr.length; i++) {
        count += tmpArr[i].count;
    }
    price.innerText = count;
    return count;
}

/* to fill table rows */

function renderBasket() {
    let tmpArr = getCartData();
    for (let i = 0; i < tmpArr.length; i++) {
        content[0].innerHTML += basketRow(tmpArr[i].id, tmpArr[i].size, tmpArr[i].count);
    }
    renderTotal();
}

/* render total sum */

function renderTotal() {
    let total = 0;
    let tmpArr = getCartData();
    for (let i = 0; i < tmpArr.length; i++) {
        let index = parseInt(tmpArr[i].id) - 1;
        total += parseInt(tmpArr[i].count) * parseInt(catalog[index].price.split(" "));
    }
    bagPrice[0].innerText = total;
}

/* delete product from basket */

function deleteProduct(id, size) {
    rowId = -1;
    let tmpArr = getCartData();
    removed = [];
    for (let i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i].id == id && tmpArr[i].size == size) {
            removed = tmpArr.splice(i, 1);
        }
    }
    setCartData(tmpArr);
    content[0].innerHTML = "";
    renderBasket();
    renderCount();          
}

/* qty with count and total updating */

function qtyChange(id, size, value) {
    let tmpArr = getCartData();
    for (let i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i].id == id && tmpArr[i].size == size) {
            tmpArr[i].count = parseInt(value);
        }
    }
    setCartData(tmpArr);
    renderCount();
    renderTotal();
}

/* qty for IE (use buttons instead of input number) */

function qtyUp(id, size, rowId) {
    let tmpArr = getCartData();
    let input = document.getElementsByClassName("basket__input-number");
    let itemTotal = document.getElementsByClassName("basket__price");
    let total = parseInt(itemTotal[rowId].innerText.slice(1));
    if (parseInt(input[rowId].value) >= 50) {
        return false;
    }
    let tmp = parseInt(input[rowId].value) + 1;
    let forOne;
    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].id === id) {
            forOne = parseInt(catalog[i].price.split(" "));
        }
    }
    itemTotal[rowId].innerText = "$" + (total + forOne);
    input[rowId].value = tmp;
    for (let i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i].id == id && tmpArr[i].size == size) {
            tmpArr[i].count = parseInt(input[rowId].value);
        }
    }
    setCartData(tmpArr);
    renderCount();
    renderTotal();
}

function qtyDown(id, size, rowId) {
    let tmpArr = getCartData();
    let input = document.getElementsByClassName("basket__input-number");
    let itemTotal = document.getElementsByClassName("basket__price");
    let total = parseInt(itemTotal[rowId].innerText.slice(1));
    if (parseInt(input[rowId].value) <= 1) {
        return false;
    }
    let tmp = parseInt(input[rowId].value) - 1;
  
    let forOne;
    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].id === id) {
            forOne = parseInt(catalog[i].price.split(" "));
        }
    }
    itemTotal[rowId].innerText = "$" + (total - forOne);
    input[rowId].value = tmp;
    for (let i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i].id == id && tmpArr[i].size == size) {
            tmpArr[i].count = parseInt(input[rowId].value);
        }
    }
    setCartData(tmpArr);
    renderCount();
    renderTotal();
}

/* make order button */

function makeOrder() {
    if (localStorage.getItem("basket") === null || localStorage.getItem("basket") === "[]" || localStorage.getItem("basket") === "") {
        orderBut[0].innerText = "BASKET IS EMPTY!"
        orderBut[0].disabled = true;
        return false;
    }
    localStorage.clear();
    window.location.href = 'thank-you.html';
}

/* basket row creating */
var rowId = -1;

function basketRow(id, chosedSize, count) {
    let price;
    let name;
    let img;
    for (let i = 0; i < catalog.length; i++){
        if (catalog[i].id == id) {
            price = parseInt(catalog[i].price.split(" ")) * parseInt(count);
            name = catalog[i].name;
            img = catalog[i].image;
        }
    }
    rowId++;
    return [
      '<tr class="basket__table-row" data-id=' + id + ' data-size=' + chosedSize + '>',
        '<td class="basket__table-cell">',
          '<div class="basket__image" style="background-image: url(' + img + ')";></div>',
        '</td>',
        '<td class="basket__table-cell">',
          '<p class="basket__product-name">',
            '<a href="product-details.html?id=' + id + '" class="basket__link link">',
              name,
            '</a>',
          '</p>',
          '<p class="basket__product-code">Ref. ' + id + '</p>',
        '</td>',
        '<td class="basket__table-cell">' + "One color" + '</td>',
        '<td class="basket__table-cell">' + chosedSize + '</td>',
        '<td class="basket__table-cell">',
          '<input type="number" class="basket__input-number" value="' + count + '" min="1" max="30"  onkeypress="return false" onchange="qtyChange('+ 
          id + ',' + chosedSize + ',' + 'this.value)" readonly>',
          '<button id="arrowUp" style="font-size: 20px; cursor: pointer; margin-left: -10px; margin-top: -5px;" onclick="qtyDown('+ id + ',' + chosedSize + ',' + rowId + ')">&#x25c2</button>', 
          '<button id="arrowDown" style="font-size: 20px; cursor: pointer; margin-left: 5px; margin-top: -5px;" onclick="qtyUp('+ id + ',' + chosedSize + ',' + rowId + ')">&#x25b8</button>',
        '</td>',
        '<td class="basket__table-cell">',
          '<span class="basket__price">' + "$" + price +  '</span>',
        '</td>',
        '<td class="basket__table-cell">',
          '<button class="basket__delete-button" style="cursor:pointer;" onclick="deleteProduct(' + id + ',' + chosedSize + ')">',
            '&#10060;',
          '</button>',
        '</td>',
      '</tr>',
    ].join('');
}
