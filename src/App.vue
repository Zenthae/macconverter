<script setup lang="ts">
import { ref } from 'vue';
import {
  copyToClipboard,
  lowerCaseAndColumn,
  upperCaseAndColumn,
  upperCaseAndRow,
  upperCaseNoSeparator,
} from './converter';

const truth = ref('');

const updateTruth = (event: Event) => {
  const v = (event.target as HTMLInputElement).value;

  truth.value = v;
};
</script>

<template>
  <div class="container">
    <input
      class="grid-span-3"
      type="text"
      placeholder="A convertir"
      :value="truth"
      @change="updateTruth($event)"
    />

    <label> Format : 3CA0679484A5 </label>
    <input type="text" :value="upperCaseNoSeparator(truth)" disabled />
    <button @click="copyToClipboard(upperCaseNoSeparator(truth))">Copy</button>

    <label> Format : 3C:A0:67:94:84:A5 </label>
    <input type="text" :value="upperCaseAndColumn(truth)" disabled />
    <button @click="copyToClipboard(upperCaseAndColumn(truth))">Copy</button>

    <label> Format : 3c:a0:67:94:84:a5 </label>
    <input type="text" :value="lowerCaseAndColumn(truth)" disabled />
    <button @click="copyToClipboard(lowerCaseAndColumn(truth))">Copy</button>

    <label> Format : 3C-A0-67-94-84-A5 </label>
    <input type="text" :value="upperCaseAndRow(truth)" disabled />
    <button @click="copyToClipboard(upperCaseAndRow(truth))">Copy</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 25px;
}

html,
body {
  margin: 0;
  padding: 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(auto, auto);
}

.grid-span-3 {
  grid-column: span 3;
  font-size: larger;
}
</style>
