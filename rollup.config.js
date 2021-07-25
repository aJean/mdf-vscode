import typescript from '@rollup/plugin-typescript';

/**
 * @file config
 */

export default {
  input: './src/mdf.ts',
  output: [
    {
      format: 'cjs',
      file: 'lib/mdf.js',
    },
  ],
  plugins: [typescript()],
};
