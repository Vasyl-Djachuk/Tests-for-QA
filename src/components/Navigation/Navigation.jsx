import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';
// import Link from '@mui/material/Link';

const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/materials">Materials</Link>
    </nav>
  );
};
export default Navigation;
