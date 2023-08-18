<template>
  <div
    class="
      grid
      gap-3
      p-3
      mb-9
      w-[372px]
      h-[372px]
      mx-auto
      bg-black
      rounded
      shadow-md
    "
    :class="gridClass"
  >
    <div
      v-for="letter in letters"
      :key="letter"
      class="
        flex
        justify-center
        items-center
        text-center
        font-black
        text-grid-item
        bg-white
      "
    >
      {{ letter }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    size: {
      type: Number,
      required: true,
    },
  },

  computed: {
    gridClass() {
      return `grid-rows-${this.size} grid-cols-${this.size}`;
    },
  },

  setup(props) {
    const ITERATION_NUMBER = 100; // Set constant for number of iterations for getting random unique letters
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Generate unique letters
    const letters = computed(() => {
      const array = [];

      for (let i = 0; i < ITERATION_NUMBER; i++) {
        // Get random indexes in alphabet
        const idx1 = Math.floor(Math.random() * (alphabet.length - 1));
        const idx2 = Math.floor(Math.random() * (alphabet.length - 1));

        // Swap letters at random indexes to shuffle
        [alphabet[idx1], alphabet[idx2]] = [alphabet[idx2], alphabet[idx1]];
      }

      return alphabet.slice(0, props.size * props.size);
    });

    return { letters };
  },
};
</script>
