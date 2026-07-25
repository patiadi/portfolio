/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0D12',
          soft: '#12161D',
          surface: '#161B23',
        },
        rule: '#232A36',
        paper: '#E7E9ED',
        muted: '#8A93A3',
        brass: {
          DEFAULT: '#C9A661',
          bright: '#E0C387',
          dim: '#8A733F',
        },
        ledger: {
          green: '#4CAF7D',
          red: '#B5654B',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'ledger-lines':
          'repeating-linear-gradient(to bottom, transparent, transparent 39px, #1B212B 40px)',
      },
    },
  },
  plugins: [],
}
