<template>
  <form
    @submit.prevent="onSubmit"
    class="
      flex
      rounded
      bg-white
      flex-col
      md:flex-row
      gap-3
      p-3
      justify-between
      font-400
      shadow-[0_4_4_0_#000_6.25%]
    "
  >
    <div class="flex gap-3 flex-col md:flex-row md:gap-1">
      <InputNumberLabel
        startLabel="Generate"
        endLabel="random grids,"
        v-model="numGrids"
        :max="5"
      />

      <InputNumberLabel
        startLabel="each with"
        endLabel="rows/columns."
        v-model="gridSize"
        :max="5"
      />
    </div>

    <button
      class="
        font-serif
        bg-blue-500
        text-white
        px-4
        py-2
        rounded
        disabled:opacity-50
      "
      :disabled="!canSubmit"
    >
      Generate
    </button>
  </form>
</template>

<script>
import InputNumberLabel from './InputNumberLabel.vue';

export default {
  components: {
    InputNumberLabel,
  },

  data() {
    return {
      numGrids: 0,
      gridSize: 0,
    };
  },

  computed: {
    canSubmit() {
      return this.numGrids > 0 && this.gridSize > 0;
    },
  },

  methods: {
    onSubmit() {
      this.$emit('submit', {
        numGrids: this.numGrids,
        gridSize: this.gridSize,
      });
    },
  },
};
</script>
