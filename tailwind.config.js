module.exports = {
  purge: [],
  theme: {
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '450px',
      // => @media (min-width: 450px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      default: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'xl': '0.75rem'
    },
    extend: {
      colors: {
        'almost-black': '#3d3d3d',
        'soft-pink' : '#FF7171',
      }
    }
  },
  variants: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  plugins: [],
}