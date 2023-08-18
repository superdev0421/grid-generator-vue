<template>
  <div class="flex gap-2 items-center">
    <label class="block text-xs font-sans">
      {{ startLabel }}
    </label>

    <input
      type="number"
      class="
        px-[13px]
        py-[7px]
        w-[56px]
        rounded
        text-[#CED4DA]
        border border-[#CED4DA]
        outline-none
      "
      :max="max"
      v-model.number="internalValue"
    />

    <label class="block text-xs font-sans">
      {{ endLabel }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    startLabel: {
      type: String,
      required: true,
    },
    endLabel: {
      type: String,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      internalValue: this.modelValue,
    };
  },

  watch: {
    internalValue(newVal) {
      this.$emit('update:modelValue', newVal);
    },
  },
};
</script>
