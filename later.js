function newparagraph() {
	//THIS CREATEA HEADING
	var elementh = document.createElement("h2");
	var main = document.getElementById("main");
	main.appendChild(elementh);
	var texth= document.createTextNode("NEW TOPIC.");
	elementh.appendChild(texth);	

	//THIS CREATE A PARA
	var element = document.createElement("p");

	main.appendChild(element);
	var text= document.createTextNode("some new teachers.");
	element.appendChild(text);
}
function removeelement()
{
	var elementh = document.getElementsByTagName("h2")[2];
	var parent = elementh.parentNode;
	parent.removeChild(elementh);
	var elementp = document.getElementsByTagName("p")[1];
	parent.removeChild(elementp);
}
function validatetextbox()
{
	var box = document.getElementById("name");
	var box2= document.getElementById("address");
	var box3= document.getElementById("phone");
	if (box.value=="" || box2.value=="" || box3.value=="" )
	{
	alert("Fill all the block");
	return false;
	}
	if(box3.value <>10 )
	{	
		
	alert("Enter 10 digit phone no");
	return false;
	}	
}