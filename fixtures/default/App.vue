<template>
  <!-- Vue-a11y Plugin -->
  <div role="datepicker">
    <h1>Foo</h1>
  </div>
</template>

<script setup>
// Eslint Plugin
// Import Plugin
import App from './App.vue'

// JSDoc Plugin
/**
 * @param fooo
 */
function emptyFn() {

}
emptyFn()

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
</script>
