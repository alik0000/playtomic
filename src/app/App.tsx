import React, {FC, Suspense} from 'react';
import {Router} from "pages";

export const App: FC = () => {
  return (
      <div className="app">
          <Suspense fallback={'loading'}>
              <Router/>
          </Suspense>
      </div>
  );
}
