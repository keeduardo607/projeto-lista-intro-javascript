// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const alturaUser = Number (prompt('Digite altura?'))
  const larguraUser = Number (prompt('Digite largura?'))

  const area = alturaUser * larguraUser
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  const anoAtualUser = Number (prompt('Digite o ano atual?'))
  const anoNascimentoUser = Number (prompt('Digite seu ano de nascimento?'))

  const idade = anoAtualUser - anoNascimentoUser
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt('Digite seu nome?')
  const idadeUsuario = prompt('Digite sua idade')
  const emailUsuario = prompt('Digite seu e-mail?')

  const mensagem = (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  console.log(mensagem)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  const cor1User = prompt('Digite sua cor favorita 1?')
  const cor2User = prompt('Digite sua cor favorita 2?')
  const cor3User = prompt('Digite sua cor favorita 3?')

  tresCoresFavoritas = [cor1User, cor2User, cor3User]
  console.log(tresCoresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    stringMaiuscula = string.toUpperCase()

  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  ingressosQuePrecisamSerVendidos = custo / valorIngresso
  return ingressosQuePrecisamSerVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  // Criei uma cópia da array original
  const copiaArray = array.slice()
  // Removi o ultimo elemento da array
  const removeUltimoElemento = copiaArray.pop()
  // Removi o primeiro elemento da array
  const removePrimeiroElemento = copiaArray.shift()
  // Adicionando a variavel "removeUltimoElemento" na primeira posição do indice da array.
  copiaArray.unshift(removeUltimoElemento) 
  // Adicionando a variavel "removePrimeiroElemento" na ultima posição do indice da array.
  copiaArray.push(removePrimeiroElemento)

  return copiaArray

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // Pergunte ao Usuario
  const anoAtual = Number(prompt('Digite o ano atual?'))
  const anoNascimento = Number(prompt('Digite o ano do seu nascimento?'))
  const idade = anoAtual - anoNascimento
  const anoEmissaoRg = Number(prompt('Digite o ano que seu RG foi emitido?'))
 
  //Comparadores
  const menorOuIgualA20 = (idade <= 20) && (anoEmissaoRg + 5) <= anoAtual
  const entre20E50 = (idade > 20 && idade <= 50) && (anoEmissaoRg + 10) <= anoAtual
  const maiorQue50 = idade > 50 && (anoEmissaoRg + 15) < anoAtual

  const compare = (menorOuIgualA20 || entre20E50 || maiorQue50)
  console.log(compare)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !=0) {

  return true

  } else return false

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const ehMaior = prompt('Você tem mais de 18 anos?')
  const temEnsinoMedio = prompt('Você possui ensino médio completo?')
  const temDisponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const ehValida = (ehMaior === "sim") && (temEnsinoMedio === "sim") && (temDisponibilidade === "sim")
  console.log(ehValida)
}