//your JS code here. If required.

const button = document.getElementById("btn");

button.addEventListener("click",()=>{
	
	const text = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);

	const outputDiv  = document.getElementById("output");

	setTimeOut(()=>{
		outputDiv.innerText = text;
	},delay);
})