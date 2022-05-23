import classNames from 'classnames'
import { ButtonProps } from '@/types/button'

const Button: React.FC<ButtonProps & React.AllHTMLAttributes<HTMLAnchorElement> & React.AllHTMLAttributes<HTMLButtonElement>> = ({ children, onClick, className, href, minimal, disabled, intent, ...props }) => {
  const Tag: keyof JSX.IntrinsicElements = href && !disabled ? 'a' : 'button'

  const classes = classNames(
    className,
    'py-2 px-4 rounded text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 hover:text-gray-900 cursor-pointer shadow block text-center',
    {
      'bg-transparent hover:bg-gray-200 shadow-none': minimal,
      'bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200 hover:text-gray-400': disabled,
      'bg-cyan-600 !text-cyan-50 hover:bg-cyan-700 hover:text-cyan-50 shadow-cyan-500/50': intent === 'primary',
      'bg-red-800 text-red-50 hover:bg-red-900 hover:text-red-50 shadow-red-500/50': intent === 'danger',
      'bg-teal-600 text-teal-50 hover:bg-teal-700 hover:text-teal-50 shadow-teal-700/50': intent === 'success',
      'bg-yellow-600 text-yellow-50 hover:bg-yellow-700 hover:text-yellow-50 shadow-yellow-500/50': intent === 'warning'
    }
  )

  return (
    <Tag
      className={classes}
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button