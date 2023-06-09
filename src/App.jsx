import { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';
import {routes} from './routes'

const MyApp = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

function App() {
  return (
    <>
      <MyApp>
        <RouterProvider router={routes} />
      </MyApp>
    </>
  );
}

export default App;
