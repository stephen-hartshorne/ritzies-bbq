export default {
  theme: {
    extend: {
      'slide-down': {
        '0%': { opacity: '0', transform: 'translateY(-0.5rem)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards', // <-- 'forwards' retains final opacity
        'slide-down': 'slide-down 0.3s ease-out forwards',
      },
    },
  },
};
