// Test file to verify ESLint rules
import { readFileSync } from 'fs'

function testFunction() {
  const unusedVariable = 'this should trigger unused-imports rule'
  const data = readFileSync('./test.txt', 'utf8')
  console.log(data)
}

export default testFunction
