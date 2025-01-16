const hexadecimal = ["0","1","2","3","4","5","6","7","8","9", 'a','b', 'c', 'd', 'e', 'f'];
const clickBtn = document.getElementById("click-btn");
const textColor = document.getElementById("color-text");

clickBtn.addEventListener("click", function(){
	let hex = "#";
	//hex += "00ff00"
	for(let i = 0; i < 6; i++)
		hex += hexadecimal[getRandomNumber()];
	//console.log(hex);
	document.body.style.backgroundColor=hex;
	textColor.textContent= hex;
	textColor.style.color= hex;
});

function getRandomNumber()
{
	return (Math.floor(Math.random()*hexadecimal.length));
}