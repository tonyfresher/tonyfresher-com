import nextConfig from 'eslint-config-next/typescript'
import * as mdxPlugin from 'eslint-plugin-mdx'
import eslintConfigPrettier from 'eslint-config-prettier'

const eslintConfig = [
    {
        ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']
    },
    ...nextConfig,
    eslintConfigPrettier,
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
