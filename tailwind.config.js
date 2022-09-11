/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "frame-bg":   "var(--frame-bg)",
        "page-bg": "var(--page-bg)",
        "frame-border": "var(--frame-border)",
        "page-border": "var(--page-border)",

       "primary-bg": "var(--primary-bg)",
        "primary-bg--hover": "var(--primary-bg--hover)",

        "primary-text": "var(--primary-text)",

        "secondary-text": "var(--secondary-text)",
        "secondary-text--disabled": "var(--secondary-text--disabled)",

        "primary-button-bg": "var(--primary-button-bg)",
        "primary-button-bg--hover": "var(--primary-button-bg--hover)",
        "primary-button-bg--pressed": "var(--primary-button-bg--pressed)",
        "primary-button-bg--disabled": "var(--primary-button-bg--disabled)",

        "secondary-button-bg": "var(--secondary-button-bg)",
        "secondary-button-bg--hover": "var(--secondary-button-bg--hover)",
        "secondary-button-bg--pressed": "var(--secondary-button-bg--pressed)",
        "secondary-button-bg--disabled": "var(--secondary-button-bg--disabled)",

        'light-button-bg': "var(--light-button-bg)",
        'light-button-text': "var(--light-button-text)",
        'light-button-bg--hover': "var(--light-button-bg--hover)",
        'light-button-bg--pressed': "var(--light-button-bg--pressed)",
        'light-button-bg--disabled': "var(--light-button-bg--disabled)",

        "textfield-bg": "var(--textfield-bg)",
        "textfield-border": "var(--textfield-border)",

        "primary-icon": "var(--primary-icon)",

        "accent": "var(--accent)",
        "error": "var(--error)",

        "waiting": "var(--waiting)",
        "active": "var(--active)",
        "closed": "var(--closed)",
        "new": "var(--new)",
      },
      borderRadius: {
        base: '5px',
        'frame': '8px',
      },
      height: {
        header: '56px',
        footer: '56px',
      },
      padding: {
        header: '56px',
        footer: '56px',
      },
    },
  },
  plugins: [],
}
