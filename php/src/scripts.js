/*console.log("Hello World Javascript!")

//console 
console.error("Isto é um erro!")
console.warn('Isto é um aviso!')
console.log('Isto é uma mensagem!')


//variaveis
var x = 10
//maneiras mais modernas
let y = 15
const z = 20

if (1) {
    let y = 55
    console.log(y)
}

console.log(x)
console.log(y)
console.log(z)

//tipos de dados 
const name = 'Pedro'
console.log(name)
console.log(typeof name)

const shirts = 4
console.log(shirts)
console.log(typeof shirts)

const decimal = 10.4
console.log(decimal)
console.log(typeof decimal)

const approved = false // true ou false
console.log(approved)
console.log(typeof approved)

let surname = null
console.log(surname)
console.log(typeof surname)

surname = 'Pereira'
console.log(surname)
console.log(typeof surname)

let age 
console.log(age)
console.log(typeof age)

age = 30 
console.log(age)
console.log(typeof age)

const linguagens = ['JS','PHP','Python']
console.log(linguagens)
console.log(typeof linguagens)

const user = {email: 'pedro@teste.com', password: 'teste123', age: 30}
console.log(user)
console.log(typeof user)

// métodos de string
const fullname = 'Pedro Pereira'
console.log(fullname.length)

const stringToArray = fullname.split(' ')
console.log(stringToArray)

console.log(fullname.toLowerCase())
console.log(fullname.toUpperCase())

console.log(fullname.indexOf('Pereira'))

console.log(fullname.slice(0, 5))

//metodos de array

const list = ['a','b','c','d','e']

console.log(list.length)

console.log(list[2])

list[5] = 'f'
console.log(list)

console.log(list[list.length-1])

list.push('g') //adiciona um elemento no fim do array
console.log(list)

list.pop() //apaga um elemento do fim do array
console.log(list)

list.shift() //apaga um elemento do inicio do array
console.log(list)

list.unshift('a')  //adiciona um elemento no inicio do array
console.log(list)

// objetos

const produto = {
    name: 'T-shirt',
    preco: 16,
    instock: true,
    tamanhos:['S','M','L'],
    'Cor':'Azul',
}

console.log(produto.name)
console.log(produto['name'])

console.log(produto['Cor'])

//destructuring

const {preco, instock} = produto

console.log(preco)
console.log(instock)

const[n1, n2] = list 
console.log(n1)
console.log(n2)

//JSON - Javascript Object Notation
const dog = {
    nome: 'Luna',
    age: 10,
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)
console.log(obj)

//Estruturas condicionais

const a = 10

if(a > 8) {
    console.log('a é maior que 8')
}

const b = 'Matheus'

if (b === 'João') {
  console.log('O nome é João!')
} else if (b === 'Pedro') {
  console.log('O nome é Pedro!')
} else {
  console.log('Não encontramos o nome do usuário!')
}

const someNumber = 14

let testingANumber = someNumber < 20 ? 'Yes' : 'No'

console.log(testingANumber) // No

// Estruturas de repetição
const myList = [1, 2, 3, 4, 5]
let counter = 0

while (counter < myList.length) {
  console.log('Imprimindo: ' + myList[counter])
  counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for (let counter = 0; counter < mySecondList.length; counter++) {
  console.log('Imprimindo: ' + mySecondList[counter])
}

// array methods
const names = ['Matheus', 'João', 'Pedro', 'Maria']

names.forEach(function (name) {
  console.log(`O nome é: ${name}`)
})

const modifiedNames = names.map(function (name) {
  if (name === 'Matheus') {
    return (name = 'Sr. Matheus')
  } else {
    return name
  }
})

console.log(modifiedNames)

const bigNumbers = [1, 2, 3, 10, 50].filter((number) => {
  return number > 5
})

console.log(bigNumbers) // [10, 50]

const sumAll = [10, 20, 30, 40, 50].reduce((total, number) => {
  return total + number
})

console.log(sumAll) // 150

// Funções
function minhaFuncao() {
  console.log('Olá função!')
}

minhaFuncao()

function nomeCompleto(nome, sobrenome) {
  return `Olá ${nome} ${sobrenome}, como vai?`
}

const saudacao = nomeCompleto('Matheus', 'Battisti')

console.log(saudacao)

const myArrowFunction = (a, b) => {
  return a + b
}

console.log(myArrowFunction(2, 2))

const mySimpleArrow = (a, b) => a + b

console.log(mySimpleArrow(5, 5))*/