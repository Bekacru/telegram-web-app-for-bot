import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import { createRequire } from 'node:module';
import { getFolders } from './scripts/buildUtils.js';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

const plugins = [
    peerDepsExternal(),
    resolve(),
    replace({
        __IS_DEV__: process.env.NODE_ENV === 'development',
    }),
    commonjs(),
    typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
    }),
    terser(),
];
const subfolderPlugins = (folderName) => [
    ...plugins,
    generatePackageJson({
        baseContents: {
            name: `${packageJson.name}/${folderName}`,
            private: true,
            main: '../cjs/index.js',
            module: './index.js',
            types: './index.d.ts',
        },
    }),
];
const folderBuilds = getFolders('./lib').map((folder) => {
    return {
        input: `lib/${folder}/index.ts`,
        output: {
            file: `dist/${folder}/index.js`,
            sourcemap: true,
            exports: 'named',
            format: 'esm',
        },
        plugins: subfolderPlugins(folder),
    };
});

export default [
    {
        input: ['lib/index.ts'],
        output: [
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
                exports: 'named',
            },
        ],
        plugins,
    },
    ...folderBuilds,
    {
        input: ['lib/index.ts'],
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                exports: 'named',
            },
        ],
        plugins,
    },
];
