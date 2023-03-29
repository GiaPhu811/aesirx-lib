import type { Options } from 'tsup';

const env = process.env.NODE_ENV;

export const tsup: Options = {
  legacyOutput: true,
  splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ['cjs', 'esm'], // generate cjs and esm files
  minify: env === 'production',
  bundle: false,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: env === 'development',
  outDir: 'dist',
  entry: ['src/**/*.ts'], //include all files under src
};
