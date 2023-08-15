<template>
  <div class="input-form">
    <div class="form-field">
      <label for="num-grids">Number of grids:</label>
      <input
        id="num-grids"
        v-model.numer="numGrids"
        type="number"
        min="1"
        max="5"
      />
    </div>
    <div class="form-field">
      <label for="grid-size">Grid size:</label>
      <input
        id="grid-size"
        v-model.numer="gridSize"
        type="number"
        min="1"
        max="5"
      />
    </div>
    <button :disabled="!canGenerate" @click="generateGrids"></button>
  </div>
</template>

<script>
export default {
  data() {
    return: {
      numGrids: 3,
      gridSize: 5,
    };
  },

  computed: {
    canGenerate() {
      return this.numGrids > 0 && this.gridSize > 0;
    }
  },

  methods: {
    generateGrids() {
      // Emit event
    }
  }
}
</script>

<style scoped>
.input-form {
  display: flex;
  align-items: center;
}
</style>
