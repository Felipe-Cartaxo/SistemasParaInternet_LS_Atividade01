// Problema: Monte uma calculadora por meio de dois valores numéricos e um operador aritmético.

// Função 'calculadora'
function calculadora (num1, num2, op) {
	switch (op) {
		case '+':
			return num1 + num2
			break
		case '-':
			return num1 - num2
			break
		case '*':
			return num1 * num2
			break
		case '/':
			return num1 / num2
		default:
			console.log('Por favor, informe uma operação válida (+, -, * ou /).')
	}
}

// Saída do programa
console.log(calculadora(1, 1, '+')) // Teste da soma
console.log(calculadora(4, 2, '-')) // Teste da subtração
console.log(calculadora(3, 3, '*')) // Teste da multiplicação
console.log(calculadora(10, 2, '/')) // Teste da divisão
console.log(calculadora(2, 6, '!')) // Teste com uma operação inválida