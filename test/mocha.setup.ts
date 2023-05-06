import 'reflect-metadata';
import { use, expect } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

use(chaiAsPromised);

// konfigurasi ts-node
import * as tsNode from 'ts-node';
tsNode.register({
  compilerOptions: {
    target: 'es6',
    module: 'commonjs',
    sourceMap: true,
    inlineSources: true,
    resolveJsonModule: true,
    noImplicitAny: true,
    strictNullChecks: true,
    baseUrl: './',
    paths: {
      '*': ['*', 'src/*'],
    },
    allowSyntheticDefaultImports: true,
  },
  ignore: ['/node_modules/'], // fix here
});

// setelah konfigurasi, impor file-file test
import './app.component.spec';
