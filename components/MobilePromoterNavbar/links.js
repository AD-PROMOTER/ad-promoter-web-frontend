import Home from '@/public/assets/MobileHome.svg';
import Discovery from '@/public/assets/MobileDiscovery.svg';
import Wallet from '@/public/assets/MobileWallet.svg';
import Profile from '@/public/assets/MobileProfile.svg';
import ActiveHome from '@/public/assets/ActiveMobileHome.svg';
import ActiveDiscovery from '@/public/assets/ActiveMobileDiscovery.svg';
import ActiveWallet from '@/public/assets/ActiveMobileWallet.svg';
import ActiveProfile from '@/public/assets/ActiveMobileProfile.svg';
export const links = [
  {
    icon: Home,
    activeIcon: ActiveHome,
    link: '/promoters',
  },
  {
    icon: Discovery,
    activeIcon: ActiveDiscovery,
    link: '/promoters/discovery',
  },
  {
    icon: Wallet,
    activeIcon: ActiveWallet,
    link: '/promoters/wallet',
  },
  {
    icon: Profile,
    activeIcon: ActiveProfile,
    link: '/promoters/settings',
  },
];
