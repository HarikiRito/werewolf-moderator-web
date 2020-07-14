import React, { FC, Suspense } from 'react';
import { AppRouter } from './routes';
import { RootTheme } from './layouts/theme';

const App: FC = () => {
  return (
    <RootTheme>
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
    </RootTheme>
  );
};

export default App;
