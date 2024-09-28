// Filter+reduce+Map

const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27]
//Numeros Pares Filter
const pares=numeros.filter(valor => valor % 2 == 0) 
console.log(pares)
//Dobra Os Numeros Map
const dobra=numeros.map(valor => valor *2 ) 
console.log(dobra)
//soma Tudo Reduce
const soma=numeros.reduce((ac,valor)=>ac+valor) 
console.log(soma)
