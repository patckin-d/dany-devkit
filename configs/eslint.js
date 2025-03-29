import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export const setupDanyEslintConfig =  (...configs) => {
  return typescriptEslint.config(
    {
      ignores: ['**/*.d.ts', '**/coverage', '**/dist', '**/*.spec.ts'],
    },
    {
      extends: [
        eslint.configs.recommended,
        ...typescriptEslint.configs.recommended,
        ...eslintPluginVue.configs['flat/recommended'],
      ],
      files: ['**/*.{ts,vue}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: globals.browser,
        parserOptions: {
          parser: typescriptEslint.parser,
        },
      },
    },
    {
      plugins: {
        vue: eslintPluginVue
      }
    },
    eslintConfigPrettier,
    {
      rules: {
        // Typescript rules

        '@typescript-eslint/ban-ts-comment': 'off',

        // Vue rules

        'vue/component-api-style': ['error', ['script-setup']],

        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style'],
          },
        ],

        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineProps',
              'defineEmits',
              'defineModel',
              'defineSlots',
              'defineCustom',
              'defineOptions',
            ],
            defineExposeLast: false,
          },
        ],

        'vue/html-comment-content-newline': [
          'warn',
          {
            singleline: 'never',
            multiline: 'always',
          },
        ],

        'vue/no-unsupported-features': [
          'error',
          {
            version: '^3.4.38',
            ignores: [],
          },
        ],

        'vue/require-macro-variable-name': [
          'warn',
          {
            defineProps: 'props',
            defineEmits: 'emit',
            defineSlots: 'slots',
            useSlots: 'slots',
            useAttrs: 'attrs',
          },
        ],

        'vue/require-emit-validator': ['warn'],
        'vue/require-explicit-slots': ['warn'],
        'vue/require-expose': ['warn'],
        'vue/prefer-true-attribute-shorthand': ['warn', 'always'],
        'vue/prefer-define-options': 'error',
        'vue/slot-name-casing': ['error', 'kebab-case'],
        'vue/no-undef-components': 'error',
        'vue/no-undef-properties': 'error',
        'vue/no-unused-emit-declarations': 'warn',
        'vue/no-unused-properties': 'warn',
        'vue/no-unused-refs': 'warn',
        'vue/no-useless-v-bind': 'warn',
        'vue/no-multiple-objects-in-class': 'warn',
        'vue/no-required-prop-with-default': 'warn',
        'vue/no-root-v-if': 'warn',
        'vue/html-comment-content-spacing': ['warn', 'always'],
        'vue/html-comment-indent': ['warn', 'tab'],
        'vue/padding-line-between-blocks': ['warn', 'always'],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/define-emits-declaration': ['error', 'type-literal'],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/no-bare-strings-in-template': ['error'],
        'vue/camelcase': [
          'error',
          {
            properties: 'always',
          },
        ],
        'vue/dot-notation': 'warn',
        'vue/eqeqeq': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-sparse-arrays': 'error',
        'vue/object-shorthand': 'warn',
        'vue/prefer-template': 'warn',

        // General rules

        camelcase: [
          'error',
          {
            properties: 'always',
          },
        ],

        'no-console': 'warn',
        'no-sparse-arrays': 'error',
        'object-shorthand': 'warn',
        'prefer-template': 'warn',
        'array-callback-return': 'warn',
        'no-duplicate-imports': ['error', { includeExports: true }],
        'no-promise-executor-return': 'warn',
        'no-self-compare': 'error',
        'no-template-curly-in-string': 'error',
        'require-atomic-updates': ['error', { allowProperties: true }],
        'accessor-pairs': 'warn',
        'arrow-body-style': ['error', 'as-needed'],
        'block-scoped-var': 'error',
        complexity: [
          'warn',
          {
            max: 13,
          },
        ],
        'consistent-return': 'warn',
        'default-case': 'warn',
        'default-case-last': 'warn',
        'default-param-last': 'warn',
        'dot-notation': 'warn',
        eqeqeq: 'error',
        'func-name-matching': 'warn',
        'func-names': ['warn', 'as-needed'],
        'func-style': [
          'warn',
          'declaration',
          {
            allowArrowFunctions: true,
          },
        ],
        'id-length': [
          'warn',
          {
            min: 2,
          },
        ],
        'logical-assignment-operators': 'warn',
        'max-nested-callbacks': [
          'warn',
          {
            max: 3,
          },
        ],
        'new-cap': 'warn',

        // TODO: Turn on in the future
        'vue/prefer-use-template-ref': ['off'],
        'vue/require-typed-ref': ['off'],
        'vue/no-console': 'off',
        'no-useless-assignment': 'off', // not working with vue
        'no-alert': 'off',
      },
    },
    ...configs
  )
}