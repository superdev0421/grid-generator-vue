import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Open Sans'],
        serif: ['Roboto Slab'],
      },
    }),
  ],
  theme: {
    breakpoints: {
      sm: '375px',
      md: '768px',
    },
    colors: {
      gray: '#CCCCCC',
      'dark-gray': '#CED4DA',
    },
    fontSize: {
      header: ['48px', '63.3px'],
      'grid-item': ['36px', '47.48px'],
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
