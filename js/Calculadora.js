	//Variáveis Globais
	
	var numero = document.getElementsByClassName("numero")
	var result = document.getElementById("resultado")
	var somar = document.getElementsByClassName("operacao somar")
	var subtrair = document.getElementsByClassName("operacao subtrair")
	var multiplicar = document.getElementsByClassName("operacao multiplicar")
	var dividir = document.getElementsByClassName("operacao dividir")
	var resultar = document.getElementsByClassName("resultar")

	//Funções que apresentam os dígitos numéricos na tela 
	
	function num0() {
		result.value += ('0');  
	}
	function num1() {
		result.value += ('1');
    
	}
	function num2() {
		result.value += ('2');
		
	}
	function num3() {
		result.value += ("3");
		
	}
	function num4() {
		result.value += ("4");
		
	}
	function num5() {
		result.value += ("5");
		
	}
	function num6() {
		result.value += ("6");
		
	}
	function num7() {
		result.value += ("7");
		
	}
	function num8() {
		result.value += ("8");
		
	}
	function num9() {
		result.value += ("9");
		
	}
	function mostrar_num() {
		if (valida_ponto() == true){
			result.value += (".");
		}
	}
	
	//Funções que apresentam as operações da calculadora e ignora a repetição
	
	function soma() {
		resultado = document.getElementById("resultado").value;
		if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
		&& resultado.indexOf("/")<=0){
		result.value += "+";

		}
	}
	
	function subtrai() {
		resultado = document.getElementById("resultado").value;
		if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
		&& resultado.indexOf("/")<=0){
		result.value += "-";
		}
		
	}
	
	function multiplica() {
		resultado = document.getElementById("resultado").value;
		if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
		&& resultado.indexOf("/")<=0){
		result.value += "*";
		}
	}
	
	function divide() {
		resultado = document.getElementById("resultado").value;
		if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
		&& resultado.indexOf("/")<=0){
		result.value += "/";
		}
	}
	
	//Função que valida o ponto para decimais
	
	function valida_ponto () {
		resultado = result.value
		var str = resultado;
		var cont = 0 
		pos = str.indexOf(".");

		while ( pos != -1 ) {
			cont++;
			pos = str.indexOf( ".",pos + 1 );
		}

		if (resultado.indexOf(".")>=0){
			if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
				&& resultado.indexOf("/")<=0 || cont >=2) {
				return false
			}
		}
		return true
	}
	
	//Função para realização dos calculos 
	
	function calcular(){
		var resultado = 0;
		resultado = document.getElementById("resultado").value;
		
		if (resultado.indexOf("/") >=0 ){
			array = resultado.split("/"); 
			x = array[0];
			y = array[1];
			x = parseFloat(x,10);
			y = parseFloat(y,10);
			resultado = x / y;
			
			if(isNaN(resultado)){
				document.getElementById("resultado").value = "Erro de operação";
			}else{
				document.getElementById("resultado").value = resultado;

			}
		}

		else if(resultado.indexOf("*")>=0){
			array = resultado.split("*"); 
			x = array[0];
			y = array[1];
			x = parseFloat(x,10);
			y = parseFloat(y,10);
			resultado = x * y;
			
			if(isNaN(resultado)){
				document.getElementById("resultado").value = "Erro de operação";
			}else{
				document.getElementById("resultado").value = resultado;
		
			}
		}

		else if(resultado.indexOf("+")>=0){
			array = resultado.split("+"); 
			x = array[0];
			y = array[1];
			x = parseFloat(x,10);
			y = parseFloat(y,10);
			resultado = x + y;
			
			if(isNaN(resultado)){
				document.getElementById("resultado").value = "Erro de operação";
			}else{
				document.getElementById("resultado").value = resultado;
		
			}
		}

		else if(resultado.indexOf("-")>=0){
			array = resultado.split("-"); 
			x = array[0];
			y = array[1];
			x = parseFloat(x,10);
			y = parseFloat(y,10);
			resultado = x - y;
			
			if(isNaN(resultado)){
				document.getElementById("resultado").value = "Erro de operação";
			}else{
				document.getElementById("resultado").value = resultado;
		
			}
		}
		
	}

	//Relacionando os digitos númericos para as funções respectivas
	
	numero[0].onclick = num9;
	numero[1].onclick = num8;
	numero[2].onclick = num7;
	numero[3].onclick = num6;
	numero[4].onclick = num5;
	numero[5].onclick = num4;
	numero[6].onclick = num3;
	numero[7].onclick = num2;
	numero[8].onclick = num1;
	numero[9].onclick = num0;
	numero[10].onclick = mostrar_num;

	//Relacionando os Botões para as funções respectivas
	
	resultar[0].onclick = calcular

	//COLOCANDO A FUNCAO NOS BOTOES DE OPERACAO
	somar[0].onclick = soma
	subtrair[0].onclick = subtrai
	dividir[0].onclick = divide
	multiplicar[0].onclick = multiplica