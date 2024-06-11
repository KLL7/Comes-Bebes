//base do código é o pomodoro    
const cards = document.querySelectorAll(".item-card")
cards.forEach((card) => {
const nameV = card.querySelector(".item-name");
const priceV = card.querySelector(".item-price");
const quantityV = card.querySelector(".item-quantity");
const imgV = card.querySelector(".item-img");

const name = nameV.textContent;
const price = priceV.textContent;
const quantity = quantityV.textContent;
const img = imgV.src;

card.addEventListener("click", () =>{
    if (quantityV <= 0){
        alert("Você tem que pedir algum para adicionar ao carrinho");
    }
    console.log(nameV, priceV, quantityV, imgV);
    addcardtocart(name, price, quantity, img);
}
)
})


function addcardtocart(name, price, quantity, img){
    const painelCart = document.querySelector(".cart-item-container");
    const oldCart = painelCart.innerHTML;

    painelCart.innerHTML = `
    <div class="cart-item">
        <div>
            <span>${name}</span>
            <div>
                <span>${quantity}</span>
                <span>${price}</span>
            </div>
        </div>
        <img class="item-img" src="${img}" alt="pastel" />
    </div>
    `

    painelCart.innerHTML = oldCart;
}
