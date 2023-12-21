import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../components/Dashboard/DashboardLayout';
import { RustWasm } from '../components/RustWasm/RustWasm';
import { MantineProvider } from '@mantine/core';

export function App() {
  return (
    <MantineProvider>
      <DashboardLayout>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<NxWelcome title="dashboard" />} />
            <Route path="/rust-wasm" element={<RustWasm />} />
          </Routes>
        </React.Suspense>
      </DashboardLayout>
    </MantineProvider>
  );
}

export default App;
