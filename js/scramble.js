const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const h2Element = document.querySelector("#div1 h2");

let iterations = 0;

setInterval(() => {
  h2Element.innerText = h2Element.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return h2Element.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 26)];
  })
  .join(""); 

  if(iterations >= h2Element.dataset.value.length) {
    iterations = 0;
  } else {
    iterations += 1/3;
  }
}, 30);


