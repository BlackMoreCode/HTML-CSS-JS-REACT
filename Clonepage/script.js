function scroll1() {
  const container = document.querySelector(".show-cards");
  if (!container) {
    console.error("Container not found");
    return;
  }

  console.log("Scrolling left");
  container.scrollBy({ left: -400, behavior: "smooth" }); // Scroll left by 400px
}

function scroll2() {
  const container = document.querySelector(".show-cards");
  if (!container) {
    console.error("Container not found");
    return;
  }

  console.log("Scrolling right");
  container.scrollBy({ left: 400, behavior: "smooth" }); // Scroll right by 400px
}
