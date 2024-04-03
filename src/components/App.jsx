import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Toaster } from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import css from './App.module.css'

const Layout = lazy(() => import('./Layout'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Home = lazy(() => import('../pages/Home/Home'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));

function App() {

  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.box}>
      <Blocks
        height="80"
        width="80"
        color="#165edb"
        ariaLabel="blocks-loading"
        wrapperStyle={css.loader}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  )
    :
    (
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={< Home />} />
            <Route path='/register' element={< RestrictedRoute redirectTo='/' component={< Registration />} />} />
            <Route path='/login' element={<RestrictedRoute redirectTo='/' component={<Login />} />} />
            <Route path='/contacts' element={<PrivateRoute redirectTo='/' component={<Contacts />} />} />
          </Route >
        </Routes >
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </>
    )
}

export default App
