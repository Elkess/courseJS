const colors =["red", "blue", "rgb(44, 219, 0)", "#cae8ff"];
const clickBtn=document.getElementById("click-btn");
const colorText = document.getElementById("color-text");

clickBtn.addEventListener("click", function(){
  const randomNumber= getRandomNumber();
  document.body.style.backgroundColor=colors[randomNumber];
  colorText.style.color=colors[randomNumber];
  colorText.textContent=colors[randomNumber];
});

function getRandomNumber()
{
  return (Math.floor(Math.random()*colors.length));
}