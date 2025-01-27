import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '~/Context';
import { ROLE_ADMIN } from '~/lib/config';

const useAuth = () => {
  const token = useSelector((state: RootState) => state.token.value);
  const Role = useSelector((state: RootState) => state.role.value);
  return token && Role === ROLE_ADMIN;
};

const AdminRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default AdminRoute;
