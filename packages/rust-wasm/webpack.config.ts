import {
  composePlugins,
  withNx,
  withWeb,
  NxComposableWebpackPlugin,
} from '@nx/webpack';
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
};

const webassembly: NxComposableWebpackPlugin = (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new WasmPackPlugin({
      crateDirectory: __dirname,
    })
  );

  if (!config.experiments) {
    config.experiments = {};
  }

  config.experiments.asyncWebAssembly = true;

  return config;
};

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withWeb(),
  webassembly,
  withModuleFederation(config)
);
