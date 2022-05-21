import MenuIcon from '@/components/menuIcon'
import { MenuButtonProps } from '@/types/menuButton'
import CloseIcon from './closeIcon'

const MenuButton: React.FC<MenuButtonProps & React.AllHTMLAttributes<HTMLButtonElement>> = ({ isOpen, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      {
        isOpen ? <CloseIcon  className="h-6 w-6"/> : <MenuIcon className="h-6 w-6" />
      }
    </button>
  )
}

export default MenuButton
