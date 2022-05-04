<script setup lang="ts">
import { computed, ref } from 'vue';

const sliceAdresse = (adresse: string, char: ':' | '-') => {
  const v = clearAdresse(adresse);

  return `${v.slice(0, 2)}${char}${v.slice(2, 4)}${char}${v.slice(
    4,
    6,
  )}${char}${v.slice(6, 8)}${char}${v.slice(8, 10)}${char}${v.slice(10, 12)}`;
};

const clearAdresse = (v: string) => {
  return v.replace(/[-:]/g, '');
};

const truth = ref('');

const updateTruth = (event: Event) => {
  const v = (event.target as HTMLInputElement).value;

  truth.value = v;
};

const upperCaseNoSeparator = computed(() =>
  clearAdresse(truth.value).toUpperCase(),
);

const upperCaseAndColumn = computed(() => {
  return sliceAdresse(clearAdresse(truth.value), ':').toUpperCase();
});

const lowerCaseAndColumn = computed(() => {
  return sliceAdresse(clearAdresse(truth.value), ':').toLowerCase();
});

const upperCaseAndRow = computed(() => {
  return sliceAdresse(clearAdresse(truth.value), '-').toUpperCase();
});

const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
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
    <input type="text" :value="upperCaseNoSeparator" disabled />
    <button @click="copyToClipboard(upperCaseNoSeparator)">Copy</button>

    <label> Format : 3C:A0:67:94:84:A5 </label>
    <input type="text" :value="upperCaseAndColumn" disabled />
    <button @click="copyToClipboard(upperCaseAndColumn)">Copy</button>

    <label> Format : 3c:a0:67:94:84:a5 </label>
    <input type="text" :value="lowerCaseAndColumn" disabled />
    <button @click="copyToClipboard(lowerCaseAndColumn)">Copy</button>

    <label> Format : 3C-A0-67-94-84-A5 </label>
    <input type="text" :value="upperCaseAndRow" disabled />
    <button @click="copyToClipboard(upperCaseAndRow)">Copy</button>
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
