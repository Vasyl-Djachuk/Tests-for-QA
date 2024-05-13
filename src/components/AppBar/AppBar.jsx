import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks';
import css from './AppBar.module.scss';
import { Button, Toolbar } from '@mui/material';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { setAddContactModal } from '../../redux/modal/slice';
import { selectAddModal } from '../../redux/modal/selectors';
import { useLocation } from 'react-router-dom';
import Container from '../../shared/components/Container/Container';

const AppBars = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const AddModal = useSelector(selectAddModal);
  const location = useLocation();
  const isContactPage = location.pathname.includes('contacts');

  const toggleAddContactModal = () => {
    dispatch(setAddContactModal(!AddModal));
  };

  return (
    <header>
      <Container>
        <div className={css.wrapper}>
          <img
            src="/src/shared/images/logoMob.png"
            alt="logo"
            width="129"
            height="28"
          />

          <Navigation />
          {isLoggedIn && isContactPage && (
            <div className={css.tools}>
              <Button onClick={toggleAddContactModal} color={'inherit'}>
                Add contact
              </Button>
              <SearchBox />
            </div>
          )}
          <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
        </div>
      </Container>
    </header>
  );
};

export default AppBars;
