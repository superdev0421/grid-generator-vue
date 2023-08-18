<template>
  <form
    @submit.prevent="onSubmit"
    class="
      flex flex-col
      md:flex-row
      justify-between
      gap-3
      p-3
      rounded
      bg-white
      font-400
      shadow-md
    "
  >
    <div class="flex flex-col gap-3 md:flex-row md:gap-[2px]">
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
        bg-primary
        text-white
        px-[13px]
        py-[7px]
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
