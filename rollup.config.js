import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

// const { readdirSync } = require('fs')
// const getInput = () => {
//   const input = { index: 'src/index.tsx' }

//   const files = readdirSync('src', { encoding: 'utf8', withFileTypes: false })
//   files.forEach((item) => {
//     if (item !== 'index.tsx') {
//       input[item] = `src/${item}/index.tsx`
//     }
//   })

//   return input
// }

export default {
  input: 'src/index.tsx',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    {
      dir: 'es',
      format: 'es',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: [
        '**/__tests__/**'
      ],
      clean: true
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render']
      }
    })
  ]
}
