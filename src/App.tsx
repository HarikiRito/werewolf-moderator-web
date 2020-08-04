import React, { FC, Suspense } from 'react';
import { AppRouter } from './routes';
import { RootTheme } from './layouts/theme';
import { hot } from 'react-hot-loader/root';

const App: FC = () => {
  return (
    <RootTheme>
      <Suspense fallback="Loading...">
        <AppRouter />
      </Suspense>
    </RootTheme>
  );
};

export default hot(App);
