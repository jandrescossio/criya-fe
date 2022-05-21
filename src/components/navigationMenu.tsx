import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@/components/button'
import { Navigation } from '@/types/navigation'

const NavigationMenu: React.FC<Navigation.MenuProps> = ({ options, disableActiveRoute, disableMinimal }) => {
  const router = useRouter()

  return (
    <>
      {
        options.map(({ name, href, intent }) => (
          <Link href={href} key={name}>
            <Button minimal={!disableMinimal} intent={router.pathname === href && !disableActiveRoute ? 'primary' : intent } href={href}>{name}</Button>
          </Link>
        ))
      }
    </>
  )
}

export default NavigationMenu
