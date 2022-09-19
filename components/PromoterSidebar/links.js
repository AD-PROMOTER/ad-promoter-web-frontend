import home from '@/public/assets/home.svg'
import home2 from '@/public/assets/home-2.svg'
import discover from '@/public/assets/discover.svg'
import discover2 from '@/public/assets/discover-2.svg'
import wallet from '@/public/assets/empty-wallet.svg'
import wallet2 from '@/public/assets/empty-wallet-2.svg'
import notification from '@/public/assets/notification-bing.svg'
import notification2 from '@/public/assets/notification-bing-2.svg'
import help from '@/public/assets/smileys.svg'
import settings from '@/public/assets/setting.svg'
import settings2 from '@/public/assets/setting-2.svg'

export const links = [
    {
        title: 'Main Menu',
        link: [
          {
            name: 'home',
            icon: home,
            cIcon: home2,
            pathName: '/promoters'
          },
          {
            name: 'discovery',
            icon: discover,
            cIcon: discover2,
            pathName: '/promoters/discovery'
          },
          {
            name: 'wallet',
            icon: wallet,
            cIcon: wallet2,
            pathName: '/promoters/wallet'
          },
          {
            name: 'notifications',
            icon: notification,
            cIcon: notification2,
            pathName: '/promoters/notification'
          },
        ],
    },
    {
        title: 'Other Menu',
        link: [
          {
            name: 'help',
            icon: help,
            cIcon: help,
            pathName: '/promoters/help'
          },
          {
            name: 'settings',
            icon: settings,
            cIcon: settings2,
            pathName: '/promoters/settings'
          }
        ]
      }
]