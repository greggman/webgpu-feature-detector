import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));
const banner = `/* webgpu-feature-detector@${pkg.version}, license MIT */`;
const major = pkg.version.split('.')[0];
const dist = `dist/${major}.x`;

const plugins = [
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.json' }),
];
const shared = {
    watch: {
        clearScreen: false,
    },
};

export default [
    {
        input: 'src/webgpu-feature-detector.ts',
        output: [
            {
                file: `${dist}/webgpu-feature-detector.module.js`,
                format: 'esm',
                sourcemap: true,
                freeze: false,
                banner,
            },
        ],
        plugins,
        ...shared,
    },
    {
        input: 'src/webgpu-feature-detector.ts',
        output: [
            {
                file: `${dist}/webgpu-feature-detector.module.min.js`,
                format: 'esm',
                sourcemap: true,
                freeze: false,
                banner,
            },
        ],
        plugins: [
            ...plugins,
            terser(),
        ],
        ...shared,
    },
    {
        input: 'src/webgpu-feature-detector.ts',
        output: [
            {
                name: 'webgpuFeatureDetector',
                file: `${dist}/webgpu-feature-detector.js`,
                format: 'umd',
                sourcemap: true,
                freeze: false,
                banner,
            },
        ],
        plugins,
        ...shared,
    },
    {
        input: 'src/webgpu-feature-detector.ts',
        output: [
            {
                name: 'webgpuFeatureDetector',
                file: `${dist}/webgpu-feature-detector.min.js`,
                format: 'umd',
                sourcemap: true,
                freeze: false,
                banner,
            },
        ],
        plugins: [
            ...plugins,
            terser(),
        ],
        ...shared,
    },
];
