// TSlint Plugin
// Import Plugin
import file from './index.ts'

// JSDoc Plugin
/**
 * @param fooo
 */
export function emptyFn() {

}

// Promise Plugin
Promise.resolve((new Promise), (new Promise))

// Unicorn Plugin
const dom = document.querySelector('body')
dom.innerText = 'foo'


// Security Plugin
const accessLevel = 'user'
if (accessLevel !== 'user‮') {
  console.log('You are an admin.')
}
