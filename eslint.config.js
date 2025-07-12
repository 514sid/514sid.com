import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default defineConfig([
	{ files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
	{ files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], languageOptions: { globals: {...globals.browser, ...globals.node} } },
	tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{ files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: ['markdown/recommended'] },
	{ files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		rules: {
			'indent': ['error', 'tab'],
			'quotes': ['error', 'single'],
			'semi': ['error', 'never'],
			'no-tabs': 'off'
		}
	}
])
