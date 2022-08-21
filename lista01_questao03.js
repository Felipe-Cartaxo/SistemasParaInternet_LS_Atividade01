// Problema: Monte um programa para verificar se é possível formar um triângulo e, caso seja, classifique-o.

// Função para verificar se é possível formar um triângulo
function verificar_triangulo (a, b, c) {
	if ((a >= b + c) || (b >= a + c) || (c >= a + b)) { /*A medida de cada lado do triângulo deve ser maior que a soma da medida dos outros dois lados*/
		return false
	}
	else {
		return true
	}
}

// Função para classificar o triângulo
function classificar_triangulo (lado1, lado2, lado3) {
	if (verificar_triangulo (lado1, lado2, lado3) == false) {
		console.log('Não foi possível formar um triângulo.')
	}
	else {
		if ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)) { // Verifica se todos os lados são iguais
			return console.log('O triângulo é equilatero.')
		}
		else if ((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)) { // Verifica se todos os lados são diferentes
			return console.log('O triângulo é escaleno.')
		}
		else {
			return console.log('O triângulo é isósceles.')
		}
	}
}

// Saída do programa
console.log(classificar_triangulo(2, 2, 2))
console.log(classificar_triangulo(10, 10, 10))
console.log(classificar_triangulo(3, 4, 4))
console.log(classificar_triangulo(4, 3, 4))
console.log(classificar_triangulo(4, 4, 3))
console.log(classificar_triangulo(10, 10, 2))
console.log(classificar_triangulo(3, 4, 5))
console.log(classificar_triangulo(10, 11, 12))
console.log(classificar_triangulo(5, 4, 2))
console.log(classificar_triangulo(0, 0, 0))
console.log(classificar_triangulo(3, 4, -5))
console.log(classificar_triangulo(1, 1, 3))
console.log(classificar_triangulo(2, 4, 2))