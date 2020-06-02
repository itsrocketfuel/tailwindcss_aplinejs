module.exports = {
  purge: [],
  theme: {
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