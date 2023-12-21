import { ModuleFederationConfig, SharedLibraryConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react-ex1',
  exposes: {
    './Module': './src/remote-entry.ts'
  },
  shared: (libraryName: string, sharedConfig: SharedLibraryConfig) => {
    return false;
  }
};

export default config;
