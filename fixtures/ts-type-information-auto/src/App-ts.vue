<script setup lang="ts">
class MyClass {
  public log(): void {
    console.log(this)
  }
}

const instance = (new MyClass)
const myLog = instance.log
myLog()
</script>

<template>
  <div>
    <h1>Foo</h1>
  </div>
</template>
