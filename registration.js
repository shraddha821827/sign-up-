function myfun(){
	var a=document.myform.fname.value;
	
	var c=document.myform.pname.value;
	var d=document.myform.ename.value;
	var atposition=d.indexOf("@");
	var dotposition=d.lastIndexOf(".");
	var e=document.myform.Pass.value;
	if(a==null || a=="")
	{
		alert("name can't be blank");
		return false;
	}

	else if(isNaN(c))
	{
		alert("enter only numeric value");
		return false;
	}
	else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=d.length)
	{
		alert("please check the E-mail id\n Like : paper@gmail.com");
		return false;
	}
	else if(e.length<6)
		{
			alert("password must be at least 6 character long");
			return false;		
		} 
}