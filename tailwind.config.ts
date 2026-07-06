import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./app/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        background:     'var(--background)',
        surface:        'var(--surface)',
        foreground:     'var(--foreground)',
        'muted-fg':     'var(--muted-fg)',
        primary:        'var(--primary)',
        'primary-dk':   'var(--primary-dk)',
        accent:         'var(--accent)',
        'tok-border':   'var(--tok-border)',
        'label-muted':  'var(--label-mute)',
        // fixed across modes
        'primary-tint': '#EDE9FE',
        gold:           '#CA8A04',
        'dark-gold':    '#FBBF24',
      },
      fontFamily: {
        sans:    ['"Koko Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        ui:      ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
        content: '1200px',
      },
    },
  },
} satisfies Config
