// Questão 1

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}

// Questão 2

function someFn(number) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}

//  Questão 3

function calculator(n1, n2) {
  return callback => callback(n1, n2)
}

// Questão 4

/**
 * Nessa ordem:
 * 4
 * 1
 * 5
 * 1
 */

// Questão 5

function tabu(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`)
  }
}
