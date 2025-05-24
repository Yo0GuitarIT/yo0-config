// Test file with unsorted imports
import { readFileSync } from 'fs'

// Some exports
export const helper1 = () => {}
export const config = {}
export default helper1
export { readFileSync }
