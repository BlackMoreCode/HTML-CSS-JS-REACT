function calculateSetPrice() {
  const burger1 = Number(document.getElementById("burger1").value);
  const burger2 = Number(document.getElementById("burger2").value);
  const burger3 = Number(document.getElementById("burger3").value);
  const drink1 = Number(document.getElementById("drink1").value);
  const drink2 = Number(document.getElementById("drink2").value);

  const burgersP = [burger1, burger2, burger3];
  const drinkP = [drink1, drink2];

  const cheapestBurger = Math.min(...burgersP);
  const cheapestDrink = Math.min(...drinkP);
  const setPrice = cheapestBurger + cheapestDrink - 50;

  const resultElement = document.getElementById("result");
  resultElement.textContent = `제일 싼 세트의 가격은: ${setPrice}원 입니다.`;
}
