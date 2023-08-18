<template>
  <div
    class="
      grid
      gap-3
      w-[372px]
      h-[372px]
      mx-auto
      bg-black
      p-3
      mb-4
      shadow-[0_4_4_0_#000_6.25%]
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
        border
        p-2
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
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const letters = computed(() => {
      const array = [];

      for (let i = 0; i < props.size * props.size; i++) {
        let letter;

        do {
          letter = alphabet[Math.floor(Math.random() * alphabet.length)];
        } while (array.includes(letter));

        array.push(letter);
      }

      return array;
    });

    return { letters };
  },
};
</script>
