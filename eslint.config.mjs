import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin'; // Optional, for TypeScript projects
import tsParser from '@typescript-eslint/parser'; // Optional, for TypeScript projects

export default [
  // Base JavaScript recommended rules
  js.configs.recommended,

  // TypeScript rules (if using TypeScript)
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Adjust if your tsconfig is elsewhere
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // Next.js rules
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Optional: Customize rules or add ignore patterns
  {
    ignores: ['node_modules/', 'dist/', '.next/'],
    linterOptions: {
      reportUnusedDisableDirectives: true, // Replaces the deprecated CLI option
    },
  },
];