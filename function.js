
function myFunction(){
	var method = document.getElementById("option").value;
	var num1 = document.getElementById("1").value;
	var num2 = document.getElementById("2").value;
	var sum = Number(num1) + Number(num2);
	if(method == '+'){
		return Number(num1) + Number(num2);
	}
	else if(method == '-'){
		return Number(num1) - Number(num2);
	}
	else if(method == '*'){
		return Number(num1) * Number(num2);
	}
	else if(method == '/'){
		return Number(num1) / Number(num2);
	}
	else if(method == '%'){
		return Number(num1) % Number(num2);
	}
}