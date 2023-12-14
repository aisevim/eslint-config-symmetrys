<template>
  <div />
  <template key="foo" />
</template>

<script setup lang="ts">
// Eslint Plugin
// Import Plugin
import AppTs from './App-ts.vue'

// JSDoc Plugin
/**
 * @param fooo
 */
export function emptyFn(): any {

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
</script>
