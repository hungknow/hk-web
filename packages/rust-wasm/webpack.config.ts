const { composePlugins, withNx } = require('@nx/webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
};

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  (config: any) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    config.plugins.push(new WasmPackPlugin({
      crateDirectory: __dirname,
    }));
    config.experiments.asyncWebAssembly = true;

    return config;
  },
  withModuleFederation(config)
);
