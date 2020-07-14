import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RoutePath } from './routePath';
import React, { lazy } from 'react';

const HomePage = lazy(() => import('../screens/HomePage'));
export function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutePath.home} exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
