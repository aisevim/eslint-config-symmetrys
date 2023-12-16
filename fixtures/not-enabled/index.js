// Eslint Plugin
// Import Plugin
import file from './index.js'

// do noting
// JSDoc Plugin
/**
 * @param fooo
 */
export function emptyFn(foo) {

}

// Node Plugin
export const path = `${ __dirname }/foo.js`

// Promise Plugin
Promise.resolve((new Promise), (new Promise));

// Unicorn Plugin
const dom = document.querySelector('body')
dom.innerText = 'foo'


// do noting
// Security Plugin
const accessLevel = 'user'
if (accessLevel !== 'user‮') {
  console.log('You are an admin.')
}
