import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import { IsConnected } from './utils/IsConnected';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path="/profile"
        element={
          <IsConnected>
            <Profile />
          </IsConnected>
        }
      />
    </Route>
  )
);

export default router;
