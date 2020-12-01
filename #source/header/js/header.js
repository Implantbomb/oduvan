'use strict'

/* return button */
document.getElementById("return-button").addEventListener('click', function(){
    if(this.classList.contains("under-menu")){
        this.classList.remove("under-menu");
        document.querySelector(".account-title").classList.remove("hide-container");
        document.querySelector(".account-tabs").classList.remove("hide-container");
        document.querySelectorAll('.account-container').forEach(item => {
            item.classList.remove('show-container_block');
        });
    } else if(this.classList.contains("degustation-menu")){
        let container = document.querySelector('.menu');
        document.getElementById("return-button").classList.remove("degustation-menu");
        container.querySelector(".account-tabs").classList.remove("hide-container");
        document.querySelector('.degustation').classList.remove("show-container_block");
    }
    else{
        document.querySelectorAll(".dropdown").forEach( item => {
            if(item.classList.contains("is-active")){
                item.classList.remove("is-active");
                item.classList.remove("show-container");
                item.classList.remove("show-container_block");
            }
        });
        document.querySelector('.header__menu-buttons').classList.toggle('hide-container');
        document.querySelector('.header__buttons-wrapper').classList.toggle('hide-container');
        document.querySelector('.header__return-arrow').classList.toggle('show-container');
        document.querySelector('.main').classList.toggle('hide-container');
        document.querySelector('.footer').classList.toggle('hide-container');
    }    
});

/* menu button */

document.getElementById('menu_button').addEventListener('click', function(){
    let container = document.querySelector('.menu');
    if(document.body.clientWidth <= 575){
        document.querySelector('.header__menu-buttons').classList.toggle('hide-container');
        document.querySelector('.header__buttons-wrapper').classList.toggle('hide-container');
        document.querySelector('.header__return-arrow').classList.toggle('show-container');
        document.querySelector('.main').classList.toggle('hide-container');
        document.querySelector('.footer').classList.toggle('hide-container');
    }
    if (container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container_block");
        container.classList.add("is-active");
    }
});

document.getElementById('degustationButton').addEventListener('click', function(){
    let container = document.querySelector('.menu');
    document.getElementById("return-button").classList.add("degustation-menu");
    container.querySelector(".account-tabs").classList.add("hide-container");
    document.querySelector('.degustation').classList.add("show-container_block");
});


/* categories button */

document.getElementById('categories-button').addEventListener('click', function(){
    let container = document.querySelector('.categories');
    if(document.body.clientWidth <= 575){
        document.querySelector('.header__menu-buttons').classList.toggle('hide-container');
        document.querySelector('.header__buttons-wrapper').classList.toggle('hide-container');
        document.querySelector('.header__return-arrow').classList.toggle('show-container');
        document.querySelector('.main').classList.toggle('hide-container');
        document.querySelector('.footer').classList.toggle('hide-container');
    }
    if (container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container_block");
        container.classList.add("is-active");
    }
});

document.querySelectorAll('.category-button').forEach(item => item.addEventListener('click', function(){
    if(item.querySelector('.category').checked){
        item.querySelector('.category').checked = false;
    } else{
        item.querySelector('.category').checked = true;
    }
    if(item.querySelector('.category').checked){
        item.querySelector('.custom-checkbox').src = "img/checked.svg"
    } else{
        item.querySelector('.custom-checkbox').src = "img/not-checked.svg"
    }
}));
/* farm production */

document.getElementById('farm-production').addEventListener('click', function(){
    let container = document.querySelector('.farm-production');
    if(container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container");
        container.classList.add("is-active");
        this.classList.add("menu-active");
    }
});

/* hunt production */

document.getElementById('hunt-delicacy').addEventListener('click', function(){
    let container = document.querySelector('.hunt-delicacy');
    if(container.classList.contains("is-active")){
        clearActive()
    } else{
        clearActive()
        container.classList.add("show-container");
        container.classList.add("is-active");
        this.classList.add("menu-active");
    }
});

/* children-production */

document.getElementById('for-children').addEventListener('click', function(){
    let container = document.querySelector('.for-children');
    if (container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container");
        container.classList.add("is-active");
        this.classList.add("menu-active");
    }
});

/* farm oduvan */

document.getElementById('oduvan-farm').addEventListener('click', function(){
    let container = document.querySelector('.oduvan-farm');
    if (container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container");
        container.classList.add("is-active");
        this.classList.add("menu-active");
    }
});

/* account button */

document.getElementById('account_button').addEventListener('click', function(){
    let container = document.querySelector('.account');
    if(document.body.clientWidth <= 575){
        document.querySelector('.header__menu-buttons').classList.toggle('hide-container');
        document.querySelector('.header__buttons-wrapper').classList.toggle('hide-container');
        document.querySelector('.header__return-arrow').classList.toggle('show-container');
        document.querySelector('.main').classList.toggle('hide-container');
        document.querySelector('.footer').classList.toggle('hide-container');
    }
    if (container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container_block");
        container.classList.add("is-active");
    }
});

/* registration form */

document.getElementById("registrationButton").addEventListener('click', function(){
    document.querySelector(".log-in").classList.remove('form-active');
    document.querySelector(".registration").classList.add('form-active');
  });
document.getElementById("returnToLogin").addEventListener('click', function(){
    document.querySelector(".log-in").classList.add('form-active');
    document.querySelector(".registration").classList.remove('form-active');
});

/* account tabs */

document.getElementById("myProductsButton").addEventListener('click', function(){
    if(document.body.clientWidth <= 575){
        document.getElementById("return-button").classList.add("under-menu");
        document.querySelector(".account-title").classList.add("hide-container");
        document.querySelector(".account-tabs").classList.add("hide-container");
        document.querySelector('.my-goods').classList.add('show-container_block');
    } else{
        document.querySelector('.my-goods').classList.add('show-container_block');
        document.querySelector('.order-history').classList.remove('show-container_block');
        document.querySelector('.personal-data').classList.remove('show-container_block');
        document.querySelectorAll('.account-tab').forEach( item => item.classList.remove('selected-tab'));
        this.classList.add("selected-tab");
    }
});

document.getElementById("orderHistoryButton").addEventListener('click', function(){
    if(document.body.clientWidth <= 575){
        document.getElementById("return-button").classList.add("under-menu");
        document.querySelector(".account-title").classList.add("hide-container");
        document.querySelector(".account-tabs").classList.add("hide-container");
        document.querySelector('.order-history').classList.add('show-container_block');
    } else{
        document.querySelector('.order-history').classList.add('show-container_block');
        document.querySelector('.personal-data').classList.remove('show-container_block');
        document.querySelector('.my-goods').classList.remove('show-container_block');
        document.querySelectorAll('.account-tab').forEach( item => item.classList.remove('selected-tab'));
        this.classList.add("selected-tab");
    }    
});

document.getElementById("personalDataButton").addEventListener('click', function(){
    if(document.body.clientWidth <= 575){
        document.getElementById("return-button").classList.add("under-menu");
        document.querySelector(".account-title").classList.add("hide-container");
        document.querySelector(".account-tabs").classList.add("hide-container");
        document.querySelector('.personal-data').classList.add('show-container_block');
    } else{
        document.querySelector('.personal-data').classList.add('show-container_block');
        document.querySelector('.order-history').classList.remove('show-container_block');
        document.querySelector('.my-goods').classList.remove('show-container_block');
        document.querySelectorAll('.account-tab').forEach( item => item.classList.remove('selected-tab'));
        this.classList.add("selected-tab");
    }
});

if(document.body.clientWidth <= 575){    
    document.querySelector('.my-goods').classList.remove('show-container_block');
}



/* shopping cart */

document.getElementById('cart_button').addEventListener('click', function(){
    let container = document.querySelector('.cart');
    if(document.body.clientWidth <= 575){
        document.querySelector('.header__menu-buttons').classList.toggle('hide-container');
        document.querySelector('.header__buttons-wrapper').classList.toggle('hide-container');
        document.querySelector('.header__return-arrow').classList.toggle('show-container');
        document.querySelector('.main').classList.toggle('hide-container');
        document.querySelector('.footer').classList.toggle('hide-container');
    }
    if (container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container_block");
        container.classList.add("is-active");
    }
});

document.getElementById('cart__submit').addEventListener('click', function(){
    let container = document.querySelector('.cart-data');
    if (container.classList.contains("is-active")){
        clearActive();
    } else{
        clearActive();
        container.classList.add("show-container_block");
        container.classList.add("is-active");
    }
});



/* function to close active menu */

function clearActive(){
    document.querySelectorAll(".dropdown").forEach((item) => {
        item.classList.remove("is-active");
        item.classList.remove("show-container");
        item.classList.remove("show-container_block") 
    });
    document.querySelectorAll(".header__tab")
    .forEach(item => item.classList.remove("menu-active"));
}

/* open-close tab */

document.querySelectorAll(".product-tab").forEach( item => item.addEventListener('click', function(){
    let container = item.nextElementSibling;
    let arrow = item.querySelector(".product-tab__arrow");
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