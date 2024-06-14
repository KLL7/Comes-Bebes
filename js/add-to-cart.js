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



// Popup
buttonFinish.addEventListener("click", () => {
    const painelpopup = document.createElement("div");
    painelpopup.classList.add("popup-painel");
    painelpopup.innerHTML = `
    <div class = "popup-painel-back">
        <div class = "popup-painel-content">
            <img class = "popup-painel-imgExit" src = "images/close.svg"/>
            <span class = "popup-painel-title">Finalizar compra</span>
            <span class = "popup-painel-text">Valor do seu pedido: R$ ${pricePainel}</span>
            <span class = "popup-painel-text">Coloque as informações do seu endereço de entrega: </span>
            <input class = "popup-painel-cep" type = "text" placeholder = "CEP"/>
            <input class = "popup-painel-adress" type = "text" placeholder = "Endereço"/>
            <input class = "popup-painel-neighborhood" type = "text" placeholder = "Bairro"/>
            <input class = "popup-painel-city" type = "text" placeholder = "Cidade"/>
            <button class = "popup-painel-button">Continuar</button>
        </div>
    </div>
    `;
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    const delpopup = painelpopup.querySelector(".popup-painel-imgExit");
    delpopup.addEventListener("click", () => {
        painelpopup.remove();
    });

    const buttonpopup = painelpopup.querySelector(".popup-painel-button");
    buttonpopup.addEventListener("click", () => {
        painelpopup.innerHTML = `
        <div class = "popup-painel-back">
            <span class = "popup-painel-title">Obrigado por comprar no Comes & Bebes</span>
        </div>
        `;
        setTimeout(() => {
            window.location.reload();
        }, 500)

        });

    const cep = painelpopup.querySelector(".popup-painel-cep");
    const adress = painelpopup.querySelector(".popup-painel-adress");
    const neighborhood = painelpopup.querySelector(".popup-painel-neighborhood");
    const city = painelpopup.querySelector(".popup-painel-city");
    
    cep.addEventListener("focusout", () => {
        console.log('era pra');
        const url = `https://viacep.com.br/ws/${cep.value}/json/`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.erro) {
                alert("CEP inválido");
                return;
            }
            adress.value = data.logradouro;
            city.value = data.localidade;
            neighborhood.value = data.bairro;
        })
    });

    menu.append(painelpopup);
})
