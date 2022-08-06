const kanyeQuote = document.getElementById("quote");
const quoteBtn = document.getElementById("btn");

imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

quoteBtn.addEventListener("click", function () {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => {
      kanyeQuote.innerHTML = data.quote;
    });

  let randomNumber = Math.floor(Math.random() * imageArray.length);
  let randomImage = imageArray[randomNumber];

  document.getElementById("kanye-pic").src = `./images/${randomImage}`;
});
