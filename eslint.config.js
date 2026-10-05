// @ts-check
import antfu from "@antfu/eslint-config"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"
import eslintParserVue from "vue-eslint-parser"
import nuxt from "./.nuxt/eslint.config.mjs"

export default nuxt(
  antfu({
    unocss: false,
    formatters: true,

    stylistic: {
      quotes: "double",
      semi: false,
    },

    rules: {
      "style/arrow-parens": ["error", "always"],
      "curly": ["error", "all"],
      "antfu/top-level-function": "off",
      "style/object-curly-spacing": ["error", "always"],

      "vue/multi-word-component-names": "warn",
    },
  }),
  {
    name: "app/tailwind",

    files: ["**/*.vue"],

    languageOptions: {
      parser: eslintParserVue,
    },

    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },

    rules: {
      ...eslintPluginBetterTailwindcss.configs.recommended.rules,

      "better-tailwindcss/no-unknown-classes": [
        "error",
        {
          detectComponentClasses: true,
          ignore: [
            String.raw`^[^\s]+-\(--[^)]+\)$`,
          ],
        },
      ],
    },

    settings: {
      "better-tailwindcss": {
        entryPoint: "./app/assets/styles/main.css",
      },
    },
  },
  {
    name: "app/vue3",
    rules: {
      "vue/no-multiple-template-root": "off",
    },
  },
  {
    name: "app/nuxt-layouts",
    files: ["app/layouts/**/*.vue"],
    rules: {
      "vue/no-multiple-template-root": "off",
      "vue/multi-word-component-names": "off",
    },
  },
)
