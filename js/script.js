const addBtn = document.querySelectorAll(".add-btn");

addBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    alert("Flower Added to Cart");
  })
});