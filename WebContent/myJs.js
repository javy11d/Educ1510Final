/**
 * 
 */

//quiz 1

document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   
	   
	   result = variable + sub + con + ifstate;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false;
} 

// end of quiz 1, reveal the page
function revealPage1(){
	var x = document.getElementById("restOfPage1");
	x.style.display = "block";
	
}