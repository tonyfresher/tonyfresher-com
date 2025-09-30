import { FlatCompat } from '@eslint/eslintrc'
import * as mdxPlugin from 'eslint-plugin-mdx'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const eslintConfig = [
    {
        ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']
    },
    ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
    mdxPlugin.configs.flat,
    mdxPlugin.configs.flatCodeBlocks,
    {
        files: ['**/*.mdx'],
        rules: {
            'react/no-unescaped-entities': 'off'
        }
    }
]

export default eslintConfig
