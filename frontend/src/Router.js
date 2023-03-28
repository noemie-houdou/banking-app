import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { IsConnected } from './utils/IsConnected';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path="/user"
        element={
          <IsConnected>
            <User />
          </IsConnected>
        }
      />
    </Route>
  )
);

export default router;
