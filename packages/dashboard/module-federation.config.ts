import { ModuleFederationConfig } from '@nx/webpack';
import { SharedLibraryConfig } from '@nx/webpack/src/utils/module-federation/public-api';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  remotes: ['react-ex1'],
  shared: (libraryName: string, sharedConfig: SharedLibraryConfig) => {
    switch (libraryName) {
      case '@mantine/core':
        return {
          singleton: true,
        };
      case '@mantine/hooks':
        return {
          singleton: true,
        };
      case '@tabler/icons-react':
        return {
          singleton: true,
        };
    }
    return false;
  },
};

export default config;
