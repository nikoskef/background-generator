const copyText = document.getElementById("myInput");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const buttonLeft = document.getElementById("buttonLeft")
const buttonRight = document.getElementById("buttonRight")
const body = document.getElementById("gradient");
const tooltip = document.getElementById("myTooltip");
let direction = 'right'

const setGredient = () => {
	body.style.background = "linear-gradient(to "
	+ direction
	+ ', '
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	copyText.value = body.style.background + ";";
}

color1.addEventListener("input", setGredient);
color2.addEventListener("input", setGredient);
buttonLeft.addEventListener("click", setGredient);
buttonRight.addEventListener("click", setGredient);

const textCopy = () => {  
  copyText.select();
  document.execCommand("copy");  
  tooltip.innerHTML = "Copied: " + copyText.value;
}

const copiedClipboard = () => {  
  tooltip.innerHTML = "Copy to clipboard";
}

const directionLeft = () => {
	direction='left'
}

const directionRight = () => {
	direction='right'
}