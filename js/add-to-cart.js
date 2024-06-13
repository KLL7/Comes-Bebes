const painelCart = document.querySelector("#cart-item-container");
let pricePainel = document.querySelector(".cart-total-value").innerText;
const buttonFinish = document.querySelector("#finish-button");
const menu = document.querySelector(".menu");

pricePainel = pricePainel.replace("R$", "");

const cards = document.querySelectorAll(".item-card")
cards.forEach((card) => {
const nameV = card.querySelector(".item-name").innerText;
const quantityV = card.querySelector(".item-quantity");
const buttonAdd = card.querySelector(".add-button");
const priceV = card.querySelector(".item-price").innerText;
const imgV = card.querySelector(".item-img").src;

buttonAdd.addEventListener("click", () =>{

    const quantity = quantityV.value
    const priceValue = priceV.replace('R$', '')
    console.log(priceValue)
    console.log(quantity)
    
    if (quantity <= 0){
        alert("Você tem que pedir algum para adicionar ao carrinho");
        return
        }
        
    const priceCard = parseFloat(priceValue) * parseFloat(quantity);
    console.log(priceCard)


    //Pode ver as divs dos itens no carrinho aqui
    const newcard = document.createElement("div");
    newcard.classList.add("cart-item");
    newcard.innerHTML = `
    <div>
    <span class="item-name">${nameV}</span>
    <img class="delete" src="images/delete.svg"/>
    <div>
            <span class="item-quantity">x${quantityV.value}</span>
            <span class="item-price">R$ ${priceCard}</span>
            </div>
    </div>
    <img class="item-img" src="${imgV}" alt="hamburguer" />
    `;
    
    let price = parseFloat(pricePainel);
    price = price + priceCard;
    console.log(price+"price");
    pricePainel = price
    document.querySelector(".cart-total-value").innerText = "R$ "+price;

    const del = newcard.querySelector(".delete");
    del.addEventListener("click", () => {
        let delprice = parseFloat(pricePainel);
        delprice = delprice - priceCard;
        console.log(delprice+"delprice");
        pricePainel = delprice
        document.querySelector(".cart-total-value").innerText = "R$ "+delprice;
        newcard.remove();
    })

    
    painelCart.append(newcard);
    
    }
)
})

//Pode ver as divs do popup aqui
buttonFinish.addEventListener("click", () => {
    const painelpopup = document.createElement("div");
    painelpopup.classList.add("popup-painel");
    painelpopup.innerHTML = `
    <div class = "popup-painel-back">
        <div class = "popup-painel-content">
            <img class = "popup-painel-imgExit" src = "images/close.svg"/>
            <span class = "popup-painel-title">Título</span>
            <span class = "popup-painel-text">Texto(aqui que vai ter o valor e a opção de escolher o pagamento, endereço e etc)</span>
            <button class = "popup-painel-button">OK</button>
        </div>
    </div>
    `;

    const delpopup = painelpopup.querySelector(".popup-painel-imgExit");
    delpopup.addEventListener("click", () => {
        painelpopup.remove();
    });

    const buttonpopup = painelpopup.querySelector(".popup-painel-button");
    buttonpopup.addEventListener("click", () => {
        painelpopup.remove();
        alert("Obrigado por comprar na Comes & Bebes");
        window.location.reload();
    });
    menu.append(painelpopup);
})

//Botão de escolher a quantidade
