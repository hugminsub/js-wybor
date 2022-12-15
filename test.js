
let anwser = document.getElementById("odpowiedz").value
document.getElementById("check").addEventListener("click", function(){
	if (anwser.toLowerCase() == "b"){  
	alert("dobrze")
}
else
{
	alert("źle")
}
})
