import { NavLink } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <div>Je suis la page de connexion de l'utilisateur.</div>
      <NavLink to="/user">Sign in</NavLink>
    </>
  );
}
