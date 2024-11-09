

     base = 10;
     altura = 20;
     function areaDoRetangulo(base, altura){
    let  areaDoRetangulo = base * altura
    return areaDoRetangulo
    }
    console.log(areaDoRetangulo(base, altura))

    function saudacao(nome){
          return `Bom Dia! ${nome}`;
    }
    console.log(saudacao('joao'));
    console.log(saudacao('jose'));
    console.log(saudacao('jojo'));

   
    function soma(valor1, valor2){
   let  soma = valor1 + valor2
   return soma
    }
   
   function subtracao(valor1, valor2){
    let subtracao =  valor1 - valor2
    return subtracao
   }
   console.log(soma(23, 16))
   console.log(subtracao(23, 16))

   const raiz = function(n){
        return n ** 0.5;
   };
console.log(raiz(25));   

const raiz2 =  n => n ** 0.5;
console.log(raiz2(25)); 

function verificarParOuImpar(numero)
 {
let resultado; 
    if (numero % 2 === 0)
        resultado = numero + " é par";
  else 
    resultado = numero + " é impar";
return resultado;
}

console.log (Number(verificarParOuImpar('a')));

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
console.log(verificarMaioridade(20));