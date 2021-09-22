const loadingLine = document.querySelector(".loading-line");

const blogerImages = document.querySelector(".another-blogers__images");
const burger = document.querySelector('.burger');

const menuList = document.querySelector(".menu__list");


burger.addEventListener('click', () =>{

    menuList.classList.toggle('menu-shown');
    burger.classList.toggle('burger-rotated');

})



const imagePlaceholder = ` <div class="another-blogers__images__image">
<div class="info">
    <div class="info-name">
    Макс Максимов
    </div>
    <div class="info-social">
        <div class="info-social__youtube">
            <img src="images/bloger-youtube.png" alt="youtube"/>
            <span>3160000+</span>
        </div>
        <div class="info-social__vk">
            <img src="images/bloger-vk.png" alt="vk"/>
            <span>134 000+</span>
        </div>
        <div class="info-social__instagram">
            <img src="images/bloger-instagram.png" alt="instagram"/>
            <span>128 000+</span>
        </div>
            
    </div>
</div>
</div>`

const addAnotherImageElement = ()=>{
    return fetch("https://picsum.photos/311/311", {mode: "cors", credentials: "omit"}).then((e)=>{

        e.blob().then(imageBlob=>{

            var reader = new FileReader();
            reader.readAsDataURL(imageBlob); 
            reader.onloadend = function() {
            var base64data = reader.result;                


            const inserted = blogerImages.insertAdjacentHTML('beforeend', imagePlaceholder )
            blogerImages.lastChild.style.background = `url(${base64data})`;
            
    }        

        })


    })
}

loadingLine.addEventListener("click", (e)=>{
    const promise1 = addAnotherImageElement();
    const promise2 =  addAnotherImageElement();
    const promise3 = addAnotherImageElement();
    const promise4 = addAnotherImageElement();
    // const promise5 =  addAnotherImageElement();
    // const promise6 = addAnotherImageElement();
    // const promise7 = addAnotherImageElement();
    Promise.all([promise1, promise2, promise3,promise4]).then((e)=>loadingLine.remove())
});



document.querySelectorAll(".another-blogers__images__image").forEach(e=>{
    e.addEventListener("click", ()=>{document.location.href = "index2.html"})
})


