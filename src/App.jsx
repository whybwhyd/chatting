import React from 'react';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { OverlayProvider } from './recoil/modalState';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';

const queryClient = new QueryClient();

function App() {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  return (
    <RecoilRoot>
      <OverlayProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </OverlayProvider>
    </RecoilRoot>
  );
}

export default App;
