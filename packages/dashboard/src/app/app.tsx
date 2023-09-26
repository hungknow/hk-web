import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../components/Layout/DashboardLayout';
import { MantineProvider } from '@mantine/core';

export function App() {
  return (
    <MantineProvider>
      <DashboardLayout>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<NxWelcome title="dashboard" />} />
          </Routes>
        </React.Suspense>
      </DashboardLayout>
    </MantineProvider>
  );
}

export default App;
