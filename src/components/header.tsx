import { useState } from 'react'
// import { useRouter } from 'next/router'
import { mainNavigation, authenticationNavigation } from '@/constants/navigation'
import Link from 'next/link'
import Button from '@/components/button'
import MenuButton from '@/components/menuButton'
import NavigationMenu from './navigationMenu'

export default function Header () {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  // const router = useRouter()

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <label className="text-xl font-semibold text-gray-800">Criya Store</label>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavigationMenu options={mainNavigation} />
                {/* {
                  mainNavigation.map(({ name, href }) => (
                    <Link href={href} key={name}>
                      <Button minimal intent={router.pathname === href && 'primary'} href={href}>{name}</Button>
                    </Link>
                  ))
                } */}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <NavigationMenu options={authenticationNavigation} disableActiveRoute />
              {/* {
                authenticationNavigation.map(({ name, href, intent }) => (
                  <Link href={href} key={name}>
                    <Button minimal href={href} intent={intent}>{name}</Button>
                  </Link>
                ))
              } */}
            </div>
          </div>
          <div className="flex md:hidden">
            <MenuButton onClick={() => setShowMobileMenu(!showMobileMenu) } isOpen={showMobileMenu} />
          </div>
        </div>
        {
          showMobileMenu && (
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <div className="flex flex-col gap-3">
                <NavigationMenu options={mainNavigation} disableMinimal />
              </div>
              <hr className="my-3" />
              <div className="grid grid-cols-2 gap-2 text-center">
                <NavigationMenu options={authenticationNavigation} disableActiveRoute disableMinimal />
              </div>
            </div>
          )
        }
      </div>
    </nav>
  )
}

