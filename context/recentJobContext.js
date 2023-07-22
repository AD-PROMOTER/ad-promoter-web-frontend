import { createContext, useEffect, useState } from 'react';

const RecentJobContext = createContext();

export function RecentJobProvider({ children }) {
  const [recentJobs, setRecentJobs] = useState();

  return (
    <RecentJobContext.Provider value={{ recentJobs, setRecentJobs }}>
      {children}
    </RecentJobContext.Provider>
  );
}
export default RecentJobContext;
