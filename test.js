
document.getElementById("check").addEventListener("click", function(){
	let correct = "b"
	let anwser = document.getElementById("odpowiedz").value
	if (anwser.toLowerCase() == correct ){  
	alert("dobrze")
}
else
{
	alert("źle")
}
})
