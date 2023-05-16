import { defineBuildConfig } from 'buildkarium'

export default defineBuildConfig({
   entries: [
      {
         builder: 'rollup',
         input: './src/index.ts',
         outDir: 'dist',
      },
   ],
   rollup: {
      esbuild: {
         minify: true,
         format: 'cjs',
         platform: 'node',
      },
   },
   externals: ['vscode'],
})
