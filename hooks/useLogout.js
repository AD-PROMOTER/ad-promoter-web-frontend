import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove local storage
    localStorage.removeItem('user-detail');
    localStorage.removeItem('user-token');

    //dispatch logout action
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};
