import { Navigation } from '@/types/navigation'

export const mainNavigation: Navigation.Option[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'My Bookmarks',
    href: '/bookmarks'
  }
]

export const authenticationNavigation: Navigation.Option[] = [
  {
    name: 'Login',
    href: '/login'
  },
  {
    name: 'Register',
    href: '/register',
    intent: 'success'
  }
]

export const userNavigation: Navigation.Option[] = [
  {
    name: 'Profile',
    href: '/profile'
  },
  {
    name: 'Logout',
    href: '/logout'
  }
]