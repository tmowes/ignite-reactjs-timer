const dark = {
  colors: {
    background: '#2b2735',
    black: '#27242e',
    shape: '#3c3847',
    grayHard: '#6e6359',
    gray: '#9e948a',
    white: '#F4EDE8',
    orange: '#FF3D00',
    orangeLight: '#ff6e40',
    orangeHover: '#dd2c00',
    indigo: '#2a3eb1',
    indigoLight: '#3d5afe',
    indigoHover: '#1a237e',
    error: '#c53030',
    inputs: '#211e29',
    transparent: 'transparent',
    toasts: {
      info: {
        color: '#3172b7',
        background: '#ebf8ff',
      },
      success: {
        color: '#2e656a',
        background: '#e6fffa',
      },
      error: {
        color: '#c53030',
        background: '#fddede',
      },
      warning: {
        color: '#FF9000',
        background: '#f0f0cd',
      },
    },

    'gray-100': '#E1E1E6',
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-500': '#7C7C8A',
    'gray-600': '#323238',
    'gray-700': '#29292E',
    'gray-800': '#202024',
    'gray-900': '#121214',

    'green-300': '#00B37E',
    'green-500': '#00875F',
    'green-700': '#015F43',

    'red-500': '#AB222E',
    'red-700': '#7A1921',

    'yellow-500': '#FBA94C',
  },
  shadows: {
    default: '10px 10px 10px rgba(0, 0, 0, 0.3)',
    smooth: '0 0 60px rgba(0, 0, 0, 0.05)',
  },
} as const

export default dark
