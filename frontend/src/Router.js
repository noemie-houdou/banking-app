import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import User from './pages/User';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
    </Route>
  )
);

export default router;
