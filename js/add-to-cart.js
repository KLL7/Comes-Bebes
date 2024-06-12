var painelCart = document.querySelector("#cart-item-container");
var priceTotal = document.querySelector("#cart-total").innerText;

const cards = document.querySelectorAll(".item-card")
cards.forEach((card) => {
const nameV = card.querySelector(".item-name").innerText;
const quantityV = card.querySelector(".item-quantity").value;
const priceV = card.querySelector(".item-price").innerText;
const imgV = card.querySelector(".item-img").src;

card.addEventListener("click", () =>{
    if (quantityV <= 0){
        alert("Você tem que pedir algum para adicionar ao carrinho");
        return
    }

    var newcard = document.createElement("div");
    newcard.classList.add("cart-item");
    newcard.innerHTML = `
    <div>
        <span class="item-name">${nameV}</span>
        <div>
            <img id="delete" src="images/delet-delete-cut-svgrepo-com.svg" alt="plus" />
            <span class="item-quantity">${quantityV}</span>
            <span class="item-price">${priceV}</span>
        </div>
    </div>
    <img class="item-img" src="${imgV}" alt="hamburguer" />
    `;


    const del = newcard.querySelector("#delete");
    del.addEventListener("click", () => {
        newcard.remove();
    })


    painelCart.append(newcard);

    }
)
})
