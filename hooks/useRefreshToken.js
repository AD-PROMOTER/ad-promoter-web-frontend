import axios from '@/pages/api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get('/api/v1/auth/refresh', {
        headers: {
          Authorization: `Bearer ${auth.refreshToken}`,
        },
      });

      const refreshedToken = response.data.data.token;

      setAuth((prevAuth) => {
        return {
          ...prevAuth,
          token: refreshedToken,
        };
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return refresh;
};

export default useRefreshToken;
