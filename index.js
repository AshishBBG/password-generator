let passGen = document.getElementById("pass-gen")
let temp = document.getElementById("p")
passGen.addEventListener("click",function(){

let lower = ["a", "b", "c", "d", "e", "f", "g", "h","i", "7","8","9","j", "k", "l","m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"
,"A", "B", "C", "D","1","2","3", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"
,"4","5","6","0","!","@","#","$","%","^","&","*","-","+","/","*","?"]
let j = ""
	for( let i = 0; i < 8; i++){
		j += lower[genRandom()] 
	}
temp.innerHTML = `<span id="span-style">Generated Password :<span id= "span-inner"> ${j}</span> </span>`
	})


function genRandom(){
	return Math.floor(Math.random() * 75)
}