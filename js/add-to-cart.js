var painelCart = document.querySelector("#cart-item-container");
var pricePainel = document.querySelector(".cart-total-value").innerText;
var buttonFinish = document.querySelector("#finish-button");

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
    

    var price = parseFloat(pricePainel);
    const priceValue = priceV.replace('R$', '');
    price = price + parseFloat(priceValue);
    console.log(price+"price");
    pricePainel = price
    document.querySelector(".cart-total-value").innerText = "R$ "+price;

    const del = newcard.querySelector("#delete");
    del.addEventListener("click", () => {
        var delprice = parseFloat(pricePainel);
        const delpriceValue = priceV.replace('R$', '');
        delprice = delprice - parseFloat(delpriceValue);
        console.log(delprice+"delprice");
        pricePainel = delprice
        document.querySelector(".cart-total-value").innerText = "R$ "+delprice;
        newcard.remove();
    })

    
    painelCart.append(newcard);
    
    }
)
})

buttonFinish.addEventListener("click", () => {
})