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

  // É aplicada a promoção a partir de um forEach
  function applyPromotion(discount) {
    items.forEach((item, index) => {
      const priceElements = item.querySelectorAll(".item-price");
      priceElements.forEach((priceElement, priceIndex) => {
        const originalPrice = originalPrices[index][priceIndex];
        // Ao mutiplicar o desconto com o valor original temos o novo valor
        const newPrice = (originalPrice - originalPrice * discount).toFixed(2);
        priceElement.textContent = `R$ ${newPrice.replace(".", ",")}`;
      });
    });
  }

  // Tras os valores antigos de volta (ta tendo bugs, dps eu arrumo)
  function revertPrices() {
    items.forEach((item, index) => {
      const priceElements = item.querySelectorAll(".item-price");
      priceElements.forEach((priceElement, priceIndex) => {
        priceElement.textContent = `R$ ${originalPrices[index][priceIndex]
          .toFixed(2)
          .replace(".", ",")}`;
      });
    });
  }

  // Da início as promoções indicando qual vai ser o tipo de promoção
  function startPromotion() {
    const discounts = [0.2, 0.4, 0.7];
    const randomDiscount =
      discounts[Math.floor(Math.random() * discounts.length)];
    const promotionDuration = 30000;

    applyPromotion(randomDiscount);

    setTimeout(() => {
      revertPrices();
    }, promotionDuration);  
  }

  // Timer para indicar o início de um novo intervalo
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
