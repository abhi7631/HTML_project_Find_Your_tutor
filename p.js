function validatetextbox()
{
	var box = document.getElementById("name");
	var box2= document.getElementById("address");
	var box3= document.getElementById("phone");
	var box4= document.getElementById("email");
	var box5= document.getElementById("user");
	var box6= document.getElementById("school");
	if (box.value=="" || box2.value=="" || box3.value=="" ||box4.value=="" || box5.value=="" || box6.value=="" )
	{
	alert("Fill all the block");
	return false;
	}
	if((box3.value).length < 10)
	{
	alert("phone no should b of 10 digit");
	return false;

	 } 	
}
function checkvalue()
{
	var box = document.getElementById("name");
	var box2= document.getElementById("address");
	var box3= document.getElementById("phone");
	var box4= document.getElementById("email");
	var box5= document.getElementById("edu");
	var box6= document.getElementById("teach");
	var box7= document.getElementById("sub");
	var box8= document.getElementById("tim");
	var box9= document.getElementById("user");
	if (box.value=="" || box2.value=="" || box3.value=="" ||box4.value=="" || box5.value=="" || box6.value==""|| box7.value=="" || box8.value==""|| box9.value=="" )
	{
		alert("Fill all the block");
		return false;
	}
	if((box3.value).length < 10)
	{
		alert("phone no should b of 10 digit");
		return false;

	 } 
}
function checkvalu()
{
	var box1 = document.getElementById("nam");
	var box2= document.getElementById("addres");
	var box3= document.getElementById("phon");
	var box4= document.getElementById("emai");
	var box5= document.getElementById("tau");
	var box6= document.getElementById("ti");
	if (box1.value=="" || box2.value=="" || box3.value=="" ||box4.value=="" || box5.value=="" || box6.value==""   )
	{
		alert("Fill all the block");
		return false;
	}
		if((box3.value).length < 10)
	{
		alert("phone no should b of 10 digit");
		return false;

	 } 
}	


