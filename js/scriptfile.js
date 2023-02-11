const allH2 = document.getElementsByTagName("h2");
for (const h2 of allH2) {
   h2.style.color = "skyblue";
}
document.getElementById("backpack").style.backgroundColor = "tomato";
const cards = document.getElementsByClassName("card");
for (const card of cards) {
   card.style.borderRadius = "30px";
   card.addEventListener("click", function () {
      card.style.backgroundColor = "silver";
   });
   card.addEventListener("dblclick", function () {
      card.style.backgroundColor = "white";
   });
}
function print() {
   console.log("I love you");
}
const buttons = document.getElementsByClassName("remover-btn");
for (const button of buttons) {
   button.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
   });
}
document.getElementById("exampleInputEmail1").addEventListener("keyup", function (event) {
   if (event.target.value === "email") {
      document.getElementById("submit-btn").removeAttribute("disabled");
   } else {
      document.getElementById("submit-btn").setAttribute("disabled", true);
   }
});
document.getElementById("subscribe").addEventListener("dblclick", function () {
   document.getElementById("subscribe").style.backgroundColor = "pink";
});
var img = document.getElementById("img-change");
img.addEventListener("mouseenter", function () {
   if (img.src != "./images/bags/bag-2.png") {
      img.src = "./images/bags/bag-2.png";
   } else {
      img.src = "./images/bags/bag-3.png";
   }
});
