#!/usr/bin/env node

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineIndex = 0
let inputMatrix = []
let outputMatrix = []
let outputRowLength = 0
let outputNumberOfRows = 0

rl.on('line', function (line) {
  if (lineIndex == 0) {

    outputRowLength = parseInt(line)
    // console.log(`outputRowLength: ${outputRowLength}`)

  } else if (lineIndex == 1) {

    outputNumberOfRows = parseInt(line)
    // console.log(`outputNumberOfRows: ${outputNumberOfRows}`)

  } else { // each subsequent line is an array in the inputMatrix

    if (lineIndex == outputRowLength + 1) { // user has finished typing in the last line

      inputMatrix.push(line.split(' '))

      transposeMatrix()

      // console.log('done')
      outputMatrix.forEach(row => {
        console.log(row.join(' '))
      })

      rl.close()

    } else { // populate the inputMatrix
      inputMatrix.push(line.split(' '))
    }
  }
  lineIndex += 1
})

function transposeMatrix() {
  inputMatrix.forEach((row, outputColIndex) => {
    row.forEach((item, outputRowIndex) => {
      if (outputMatrix[outputRowIndex]) {
        outputMatrix[outputRowIndex][outputColIndex] = item
      } else {
        outputMatrix[outputRowIndex] = [item]
      }
    })
  })
}

// inputMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 9, 8]]
// transposeMatrix()
// console.log(outputMatrix)

