import nodeGlobals from 'rollup-plugin-node-globals';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/main.browser.ts',
    output: {
        file: 'browser/serve-grip.js',
        format: 'iife',
        name: 'ServeGrip',
    },
    plugins: [
        replace({
            include: ['node_modules/jwt-simple/**'],
            delimiters: ['', ''],
            values: {
                'crypto.createHmac': "require('create-hmac')",
            },
        }),
        commonjs(),
        nodeGlobals(),
        nodeBuiltins(),
        nodeResolve({
            browser: true,
        }),
        json(),
        typescript({
            module: "es2015",
            moduleResolution: "node",
            sourceMap: false,
            declaration: false,
        }),
    ],
};
