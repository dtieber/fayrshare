import { type Config } from 'prettier'

const config: Config = {
  importOrder: ['.*.(css|scss)$', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  semi: false,
  singleQuote: true,
}

export default config
