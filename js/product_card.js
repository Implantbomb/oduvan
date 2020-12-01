'use strict'

/* product card rating */

function showProductCardRating(){

    let container = document.querySelector('.product-rating');
    let containerRating = container.dataset.productAverageRating;
    checkProductRating(container,containerRating);
}
    
showProductCardRating();
    
function checkProductRating(container, rating) {
    if (rating == 1) {
        container.querySelector('#star1').src = './img/rate-star-full.svg';
    }
    if (rating == 2) {
        container.querySelector('#star1').src = './img/rate-star-full.svg';
        container.querySelector('#star2').src = './img/rate-star-full.svg';
    }
    if (rating == 3) {
        container.querySelector('#star1').src = './img/rate-star-full.svg';
        container.querySelector('#star2').src = './img/rate-star-full.svg';
        container.querySelector('#star3').src = './img/rate-star-full.svg';
    }
    if (rating == 4) {
        container.querySelector('#star1').src = './img/rate-star-full.svg';
        container.querySelector('#star2').src = './img/rate-star-full.svg';
        container.querySelector('#star3').src = './img/rate-star-full.svg';
        container.querySelector('#star4').src = './img/rate-star-full.svg';
    }
    if (rating == 5) {
        container.querySelector('#star1').src = './img/rate-star-full.svg';
        container.querySelector('#star2').src = './img/rate-star-full.svg';
        container.querySelector('#star3').src = './img/rate-star-full.svg';
        container.querySelector('#star4').src = './img/rate-star-full.svg';
        container.querySelector('#star5').src = './img/rate-star-full.svg';
    }
}

/* rating of the comment */

function showCommentRating() {
    let comments = document.querySelectorAll('.last-review__rating-stars');

    comments.forEach(item => {
        let commentRating = item.dataset.ratingComment;
        if (commentRating == 1) {
            item.querySelector('#star1').style.color = '#951320';
        }
        if (commentRating == 2) {
            item.querySelector('#star1').style.color = '#951320';
            item.querySelector('#star2').style.color = '#951320';
        }
        if (commentRating == 3) {
            item.querySelector('#star1').style.color = '#951320';
            item.querySelector('#star2').style.color = '#951320';
            item.querySelector('#star3').style.color = '#951320';
        }
        if (commentRating == 4) {
            item.querySelector('#star1').style.color = '#951320';
            item.querySelector('#star2').style.color = '#951320';
            item.querySelector('#star3').style.color = '#951320';
            item.querySelector('#star4').style.color = '#951320';
        }
        if (commentRating == 5) {
            item.querySelector('#star1').style.color = '#951320';
            item.querySelector('#star2').style.color = '#951320';
            item.querySelector('#star3').style.color = '#951320';
            item.querySelector('#star4').style.color = '#951320';
            item.querySelector('#star5').style.color = '#951320';
        }
    });
}

showCommentRating();