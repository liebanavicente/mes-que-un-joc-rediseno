/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D4694A",
          hover: "#B85A3E",
          active: "#9B4B34",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3D6B7B",
          hover: "#2F5562",
          foreground: "#FFFFFF",
        },
        tertiary: {
          DEFAULT: "#D4A24A",
          foreground: "#FFFFFF",
        },
        dark: {
          DEFAULT: "#2C3E50",
          foreground: "#FEFCF8",
        },
        cream: {
          DEFAULT: "#FDF6ED",
        },
        sage: {
          DEFAULT: "#F2F5F3",
        },
        bg: {
          DEFAULT: "#FEFCF8",
        },
        charcoal: "#2D2A26",
        stone: "#6B6560",
        success: "#5A8F6E",
        error: "#C44D4D",
        warning: "#D4954A",
        whatsapp: "#25D366",
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "20px",
        lg: "16px",
        md: "12px",
        sm: "10px",
        full: "100px",
      },
      boxShadow: {
        xs: "0 1px 3px rgba(45,42,38,0.04)",
        sm: "0 4px 12px rgba(45,42,38,0.06)",
        md: "0 8px 24px rgba(45,42,38,0.08)",
        lg: "0 16px 48px rgba(45,42,38,0.12)",
        primary: "0 2px 8px rgba(212,105,74,0.3)",
        card: "0 4px 24px rgba(45,42,38,0.06)",
        "card-hover": "0 8px 32px rgba(45,42,38,0.10)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "float-in": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "float-in": "float-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
