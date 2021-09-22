const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");

const anotherBlogersImages = document.querySelector(".another-blogers__images");
const burger = document.querySelector('.burger');

const menuList = document.querySelector(".menu__list");


burger.addEventListener('click', () =>{

    menuList.classList.toggle('menu-shown');
    burger.classList.toggle('burger-rotated');

})

const delta = 327;


const handleClickLeft = (e)=>{

    anotherBlogersImages.scrollLeft = anotherBlogersImages.scrollLeft - delta;

}

const handleClickRight = (e)=>{

    anotherBlogersImages.scrollLeft = anotherBlogersImages.scrollLeft + delta;
    
}

left.addEventListener("click", handleClickLeft);

right.addEventListener("click", handleClickRight)
