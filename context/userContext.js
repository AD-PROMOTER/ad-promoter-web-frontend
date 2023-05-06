import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    // user = userInfo
    setUser(userInfo);
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      if (userInfo) {
        // user = userInfo;
        setUser(userInfo);
      }
    });
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
