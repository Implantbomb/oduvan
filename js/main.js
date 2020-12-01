'use strict'

/*  product slider arrow */

document.querySelectorAll('.product-wrapper').forEach(item => {
    
    let container = item.querySelector('.cards-container');
    let productQuantity = container.querySelectorAll('.product-card');
    let counter = 0;
    if(document.body.clientWidth > 1199){
        item.querySelector('.product-arrow_right').addEventListener('click', function(){
            if(counter == productQuantity.length - 4 || counter > productQuantity.length - 4){
                
            } else{
                counter += 1;
                container.style.right = `${counter*285}px`;
            }
        });
        item.querySelector('.product-arrow_left').addEventListener('click', function(){
            if(counter == 0){
                counter = 0;
            } else{
                counter -= 1;
                container.style.right = `${counter*285}px`;
            }
        });
    }
    else if(document.body.clientWidth > 585 && document.body.clientWidth < 1200){
        item.querySelector('.product-arrow_right').addEventListener('click', function(){
            if(counter == productQuantity.length - 4 || counter > productQuantity.length - 4){
                
            } else{
                counter += 1;
                container.style.right = `${counter*240}px`;
            }
        });
        item.querySelector('.product-arrow_left').addEventListener('click', function(){
            if(counter == 0){
                counter = 0;
            } else{
                counter -= 1;
                container.style.right = `${counter*240}px`;
            }
        });
    } 
    else{
        container.style.right = `0px`;
        item.querySelector('.product-arrow_right').addEventListener('click', function(){
            if(counter == productQuantity.length - 1){
                counter = productQuantity.length - 1;
            } else{
                counter += 1;
                container.style.right = `${counter*285 + 15}px`;
            }
        });
        item.querySelector('.product-arrow_left').addEventListener('click', function(){
            if(counter == 0){
                counter = 0;
            } else{
                counter -= 1;
                container.style.right = `${counter*285 + 15}px`;
            }
        });
    }
});

/* like button */

document.querySelectorAll(".product-card__heart-img").forEach(item => item.addEventListener('mouseover', function(){
    item.src = "img/heart-red.svg";
}));

document.querySelectorAll(".product-card__heart-img").forEach(item => item.addEventListener('mouseleave', function(){
    if(item.parentNode.classList.contains("like-active")){
        item.src = "img/heart-red.svg";
    } else{
        item.src = "img/heart.svg";
    }
}));

document.querySelectorAll(".product-card__heart-img").forEach(item => item.addEventListener('click', function(){
    if(item.parentNode.classList.contains("like-active")){
        item.parentNode.classList.remove("like-active");
        item.src = "img/heart.svg";
    } else{
        item.parentNode.classList.add("like-active");
        item.src = "img/heart-red.svg";
    }
}));


/* cart localstorage */

let allProducts = document.querySelectorAll('.product-card');

allProducts.forEach(item => {
    item.querySelector('.product-card__basket').addEventListener('click', function(){
        let cartData = getCartData() || {};
        let itemId = this.getAttribute('data-product-id');
        let itemTitle = item.querySelector('.product-card__title').innerText;
        let itemSubTitle = item.querySelector('.product-card__subtitle').innerText;
        let itemWeight = this.getAttribute('data-product-weight');
        let itemPrice = this.getAttribute('data-product-price');

        if(cartData.hasOwnProperty(itemId)){ 
            cartData[itemId][2] = Number(cartData[itemId][2]) + 1;
            cartHandler();
            renderCart();
        } else { 
            cartData[itemId] = [itemTitle, itemSubTitle, 1, itemWeight, itemPrice];
            cartHandler();
            renderCart();
        }

        setCartData(cartData);
         
        cartHandler();
        renderCart();
        
    });
});

// Получаем данные из LocalStorage
function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

// Записываем данные в LocalStorage
function setCartData(cartData){
    localStorage.setItem('cart', JSON.stringify(cartData));
    cartHandler();
    renderCart();
    return false;
}

/* cart window render */

function renderCart(){
    let cartData = getCartData();
    let cart = document.getElementById('cartWindow');
    let productsWrapper = cart.querySelector('.my-goods__wrapper');
    productsWrapper.innerHTML = "";
    for(let key in cartData){
        let productWrapper = createElem("div", "cart-product");

        /* product title */
        let productLink = createElem('a');
        let titleWrapper = createElem("div", "cart-product__name");
            let productTitle = createElem("div", "cart-product__title", cartData[key][0]);
            let productSubtitle = createElem("div", "cart-product__description", cartData[key][1]);
        titleWrapper.append(productTitle, productSubtitle);
        productLink.append(titleWrapper);
        productWrapper.append(productLink);

        /* product weight */

        let productWeight = createElem("div", "cart-product__weight");
        productWeight.innerHTML = `Вес нетто: <span class = "product-weight">${cartData[key][3]}</span> г.`
        productWrapper.append(productWeight);

        /* product price */

        let priceWrapper = createElem("div", "price-wrapper");
            let productPrice = createElem("div", "cart-product__total-price");
            productPrice.innerHTML = `<span class = "product-sum">${cartData[key][2]*cartData[key][4]}</span> ₽`
        let priceFormula = createElem("div", "cart-product__price-formula");  
            priceFormula.innerHTML = `<span class = "product-quantity">${cartData[key][2]}</span> х <span class = "product-price">${cartData[key][4]}</span> ₽`  
        priceWrapper.append(productPrice, priceFormula);
        productWrapper.append(priceWrapper);

        /* product counter */

        let productCounter = createElem("div", "cart-product__counter");
        productCounter.innerHTML = `<div class = "counter-minus counter-button">
                                        <img src="img/minus.svg">
                                    </div>
                                    <input class="counter__input" type="number" value="0" name="" pattern="\d{1,2}|100" maxlength="3">
                                    <div class = "counter-plus counter-button">
                                        <img src="img/plus.svg">
                                    </div>`;
        productWrapper.append(productCounter); 

        cartCounter(productCounter, key); 
        productNumber(cartData[key][2], key);
        
        productWrapper.append(deleteProductButton(key));
        productsWrapper.append(productWrapper);
    }
}

renderCart();

/* cart icon counter */

function productNumber(productNumber, id){
    let card = document.querySelector(`[data-product-id = "${id}"]`);
    if(productNumber == "0"){
        card.querySelector('.basket-img').src = "img/card_basket.svg";
        card.querySelector('.basket-counter').innerText = "";
    } else{
        card.querySelector('.basket-img').src = "img/cart-button.svg";
        card.querySelector('.basket-counter').innerText = productNumber;
    }
}
/* cart counter */

function cartCounter(item, id){
    let plusButton = item.querySelector('.counter-plus');
    let minusButton = item.querySelector('.counter-minus');
    let value = item.querySelector('.counter__input');
        let data = JSON.parse(localStorage.cart);
        value.value = data[id][2];
    value.onchange = function(){
        if(!value.value){
            value.value = 1;
            let data = JSON.parse(localStorage.cart);
            data[id][2] = value.value;
            localStorage.cart = JSON.stringify(data);
            cartHandler();
            renderCart();
        }
        if(value.value.length <= 2){
            let data = JSON.parse(localStorage.cart);
            data[id][2] = value.value;
            localStorage.cart = JSON.stringify(data);
            cartHandler();
            renderCart();
        } 
        else{
            value.value = 99;
            let data = JSON.parse(localStorage.cart);
            data[id][2] = value.value;
            localStorage.cart = JSON.stringify(data);
            cartHandler();
            renderCart();
        }
    }

    value.oninput = function(){
        if(value.value.length > 2){
            value.value = 99;
            let data = JSON.parse(localStorage.cart);
            data[id][2] = value.value;
            localStorage.cart = JSON.stringify(data);
            cartHandler();
            renderCart();
        }
    }
    
    plusButton.addEventListener('click', function(){
        let data = JSON.parse(localStorage.cart);
        value.value = Number(value.value) + 1;
            data[id][2] = value.value;
        localStorage.cart = JSON.stringify(data);
        cartHandler();
        renderCart();
    });
    
    minusButton.addEventListener('click', function(){
        if(value.value == 1 || value.value == 0){
            item.parentNode.remove();
            let data = JSON.parse(localStorage.cart);
            delete data[id];
            localStorage.cart = JSON.stringify(data);
            cartHandler();
            productNumber(0, id);
        } else{
            let data = JSON.parse(localStorage.cart);
            value.value = Number(value.value) - 1;
            data[id][2] = value.value;
            localStorage.cart = JSON.stringify(data);
            cartHandler();
            renderCart();
        }
    });
}

/* cart delete product button */

function deleteProductButton(id){
    let orderTrash = createElem("div", "cart-product__delete");
    orderTrash.innerHTML = `<img src="img/trash.svg" alt=""></img>`;
    orderTrash.addEventListener('click', function(){
        let data = JSON.parse(localStorage.cart);
        delete data[id];
        localStorage.cart = JSON.stringify(data);
        orderTrash.parentNode.remove();
        cartHandler();
        productNumber(0, id);
    });
    return (orderTrash);
}

/* cart products handler */
function cartHandler(){
    let totalPriceSum = 0;
    document.querySelectorAll('.cart-product').forEach(item => {
        let priceFormula = item.querySelector('.cart-product__price-formula').innerText.split(" ");
        priceFormula[0] = item.querySelector('.counter__input').value;
                
        let priceSum = item.querySelector('.cart-product__total-price').innerText.split(" ");
        priceSum[0] = Number(priceFormula[0])*Number(priceFormula[2]);
        totalPriceSum += priceSum[0];
        priceSum = priceSum.join(" ");
        item.querySelector('.cart-product__total-price').innerText = priceSum;

        priceFormula = priceFormula.join(" ");
        item.querySelector('.cart-product__price-formula').innerText = priceFormula;
    });

    let totalPrice = document.querySelector('.total-price__sum').innerHTML.split(' ');
    totalPrice[0] = totalPriceSum;
    totalPrice = totalPrice.join(' ');
    document.querySelector('.total-price__sum').innerText = totalPrice;
}

cartHandler();

/* cart clear */

document.getElementById('send_order').addEventListener('click', function(){
    localStorage.removeItem('cart');
});


/* function to create element */
function createElem(tagName, className, text){
    let elem = document.createElement(tagName);
    if(className){
        elem.className = className;
    }
    if(text){
        elem.innerText = text;
    }
    return elem;
}

/* open-close tab */

if(document.body.clientWidth <= 575){
    document.querySelectorAll(".category__title-wrapper").forEach( item => item.addEventListener('click', function(){
        let container = item.nextElementSibling;
        let arrow = item.querySelector(".tab-arrow");
        if(this.classList.contains("not-active")){
            this.classList.remove("not-active");
            container.classList.remove("hide-container");
            arrow.style = "transform: rotateZ(0deg)";
        }
        else{
            this.classList.add("not-active");
            container.classList.add("hide-container");
            arrow.style = "transform: rotateZ(180deg)";
        }
    }));
}