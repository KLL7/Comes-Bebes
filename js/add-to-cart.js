//base do código é o pomodoro
var painelCart = document.querySelector("#cart-item-container");    
//delete cardincart

const cards = document.querySelectorAll(".item-card")
cards.forEach((card) => {
const nameV = card.querySelector(".item-name").innerText;
const priceV = card.querySelector(".item-price").innerText;
const quantityV = card.querySelector(".item-quantity").value;
const imgV = card.querySelector(".item-img").src;

card.addEventListener("click", () =>{
    if (quantityV <= 0){
        alert("Você tem que pedir algum para adicionar ao carrinho");
        return
    }
    
    addcardtocart()

    function addcardtocart() {
        var oldCart = painelCart.innerHTML;
    
        var newCart = painelCart.innerHTML = `
        <div class="cart-item">
            <div>
                <span class="item-name">${nameV}</span>
                <div>
                    <img id="delete" src="images/delet-delete-cut-svgrepo-com.svg" alt="plus" />
                    <span class="item-quantity">${quantityV}</span>
                    <span class="item-price">${priceV}</span>
                </div>
            </div>
            <img class="item-img" src="${imgV}" alt="pastel" />
        </div>
        `
    
        oldCart = newCart + oldCart
        painelCart.innerHTML = oldCart;
    }
}
)
})


