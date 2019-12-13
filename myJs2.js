/**
 * 
 */

document.getElementById("form1").onsubmit=function() {
       variable = document.querySelector('input[name = "variable"]:checked').value;
	   
	   
	   result = variable;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false;
} 


function revealPage(){
	var x = document.getElementById("restOfPage");
	x.style.display = "block";
	
}
