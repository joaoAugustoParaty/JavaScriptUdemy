const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Valor não exite "undefined"

valores[4] = 10
console.log(valores)
console.log(valores.length) // Fala quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Retira o valor
delete valores [0] // Excluir o elemento no array
console.log(valores)

console.log(typeof valores)