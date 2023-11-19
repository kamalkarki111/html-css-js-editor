// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.tsx', // Update with your entry file
  output: [
    {
      file: 'dist/bundle.cjs.js', // CommonJS
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js', // ES module
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'], 
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json', // Update with your tsconfig file
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
      },
    }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
      plugins: ['@babel/plugin-transform-react-jsx'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
  external: ['react', 'react-dom'], // Add other external dependencies if necessary
};
