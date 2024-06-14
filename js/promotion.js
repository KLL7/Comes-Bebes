document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item-card");
  let originalPrices = [];

  // forEach para fazer um array com os valores originais e recoloca-los
  items.forEach((item) => {
    const priceElements = item.querySelectorAll(".item-price");
    originalPrices.push(
      Array.from(priceElements).map((priceElement) =>
        parseFloat(priceElement.textContent.replace("R$", "").replace(",", "."))
      )
    );
  });

  // Função para aplicar o desconto
  function applyPromotion(discount) {
    randomIndex = Math.floor(Math.random() * items.length);
    const item = items[randomIndex];
    const priceElements = item.querySelectorAll(".item-price");
    const nameElement = item.querySelector(".item-name");
    const ingredientsElement = item.querySelector(".item-ingredients");

    priceElements.forEach((priceElement, priceIndex) => {
      const originalPrice = originalPrices[randomIndex][priceIndex];
      const newPrice = (originalPrice - originalPrice * discount).toFixed(2);
      priceElement.textContent = `R$ ${newPrice.replace(",")} (-${discount * 100}%)`;
      priceElement.classList.add("promoted");
    });

    nameElement.classList.add("promoted");
    ingredientsElement.classList.add("promoted");

    return randomIndex;

  }

  // Função para devolver os valores
  function revertPrices(index) {
    const item = items[index];
    const priceElements = item.querySelectorAll(".item-price");
    const nameElement = item.querySelector(".item-name");
    const ingredientsElement = item.querySelector(".item-ingredients");

    priceElements.forEach((priceElement, priceIndex) => {
      priceElement.textContent = `R$ ${originalPrices[index][priceIndex]
        .toFixed(2)
        .replace(".", ",")}`;
      priceElement.classList.remove("promoted");
    });

    nameElement.classList.remove("promoted");
    ingredientsElement.classList.remove("promoted");
  }

  // Função para indicar o tipo de promoção
  function startPromotion() {
    const discounts = [0.2, 0.4, 0.7];
    const randomDiscount =
      discounts[Math.floor(Math.random() * discounts.length)];
    const promotionDuration = 30000;

    const promotedItemIndex = applyPromotion(randomDiscount);

    setTimeout(() => {
      revertPrices(promotedItemIndex);
    }, promotionDuration);  
  }

  // Timer muito brabo para indicar um novo intervalo
  function timePromotion() {
    const promotionIntervals = [10000, 20000, 30000];
    const randomInterval =
      promotionIntervals[Math.floor(Math.random() * promotionIntervals.length)];
    setTimeout(() => {
      startPromotion();
      timePromotion();
    }, randomInterval);
  }

  timePromotion();
});
