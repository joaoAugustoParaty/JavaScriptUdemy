const escola = "Cod3r"

console.log(escola.charAt(4)) //Resposta letra "r"
console.log(escola.charAt(5)) // Nada
console.log(escola.charCodeAt(3)) // Mostra a posição da tabela unicode
console.log(escola.indexOf('3')) // Indice associado ao numero 3

console.log(escola.substring(1)) // Começa do indice "1" até o final
console.log(escola.substring(0, 3)) // Começa do indice "0" até o o "3"

console.log('Escola ' .concat(escola).concat("!")) // Adicionar a palavra "Escola"
console.log('Escola ' + escola + "!") // Adicionar a palavra "Escola"
console.log(escola.replace(3, 'e')) // substitui o "3" pela letra "E"

console.log('Ana,Maria,Pedro'.split(','))


