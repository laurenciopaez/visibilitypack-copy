/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        foreground: 'var(--foreground-rgb)',
        backgroundStart: 'var(--background-start-rgb)',
        backgroundEnd: 'var(--background-end-rgb)',
        primary: 'var(--e-global-color-primary)',
        secondary: 'var(--e-global-color-secondary)',
        text: 'var(--e-global-color-text)',
        accent: 'var(--e-global-color-accent)',
        woocommerce: 'var(--woocommerce)',
        wcGreen: 'var(--wc-green)',
        wcRed: 'var(--wc-red)',
        wcOrange: 'var(--wc-orange)',
        wcBlue: 'var(--wc-blue)',
        wcPrimary: 'var(--wc-primary)',
        wcPrimaryText: 'var(--wc-primary-text)',
        wcSecondary: 'var(--wc-secondary)',
        wcSecondaryText: 'var(--wc-secondary-text)',
        wcHighlight: 'var(--wc-highlight)',
        wcHighlightText: 'var(--wc-highligh-text)',
        wcContentBg: 'var(--wc-content-bg)',
        wcSubtext: 'var(--wc-subtext)',
        midnight: 'var(--midnight)',
      },
      fontFamily: {
        primary: 'var(--e-global-typography-primary-font-family)',
        secondary: 'var(--e-global-typography-secondary-font-family)',
        text: 'var(--e-global-typography-text-font-family)',
        accent: 'var(--e-global-typography-accent-font-family)',
      },
      fontWeight: {
        primary: 'var(--e-global-typography-primary-font-weight)',
        secondary: 'var(--e-global-typography-secondary-font-weight)',
        text: 'var(--e-global-typography-text-font-weight)',
        accent: 'var(--e-global-typography-accent-font-weight)',
      },
      gradientColorStops: {
        'vivid-cyan-blue': 'rgba(6,147,227,1)',
        'vivid-purple': '#9b51e0',
        'midnight': '#2874fc',
      },
      linearGradientColors: {
        'vivid-cyan-blue-to-vivid-purple': [
          '135deg',
          'var(--gradient-vivid-cyan-blue)',
          'var(--gradient-vivid-purple)',
        ],
      },
    },
  },
  plugins: [],
}
