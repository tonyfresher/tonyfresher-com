import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const eslintConfig = [
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'storybook-static/**',
            'next-env.d.ts'
        ]
    },
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'prettier',
        'plugin:storybook/recommended'
    )
]

export default eslintConfig
