<template>
  <main class="bg-gray w-full min-h-[100vh] pt-[52px] mx-auto">
    <div class="mx-auto max-w-[612px] px-4">
      <h1 class="font-serif font-bold text-header tracking-tight">
        Grid Generator
      </h1>
      <InputForm @submit="onSubmit" />
    </div>
    <div class="grid mt-9 sm:mt-[34px]">
      <Grid v-for="n in numGrids" :key="n" :size="gridSize" />
    </div>
  </main>
</template>

<script>
import InputForm from './components/InputForm.vue';
import Grid from './components/Grid.vue';

export default {
  components: {
    InputForm,
    Grid,
  },

  data() {
    return {
      numGrids: 0,
      gridSize: 0,
    };
  },

  methods: {
    onSubmit({ numGrids, gridSize }) {
      if (numGrids > 0 && gridSize > 0) {
        this.numGrids = numGrids;
        this.gridSize = gridSize;
      }
    },
  },
};
</script>
