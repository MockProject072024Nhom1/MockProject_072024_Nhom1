import React, { Fragment } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefautComponent from './components/DefautComponent/DefautComponent';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((routes) => {
          const Page = routes.element;
          const Layout = routes.isShowHeader ? DefautComponent : Fragment;
          return (
            <Route
              key={routes.path}
              path={routes.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
