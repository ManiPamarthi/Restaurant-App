import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			integralCF: [
				'var(--font-integralCF)'
			],
			satoshi: [
				'var(--font-satoshi)'
			]
		},
	}
  },
  plugins: [],
} satisfies Config;
