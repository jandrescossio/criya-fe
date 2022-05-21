import classNames from 'classnames'

const Input: React.FC<React.AllHTMLAttributes<HTMLInputElement>> = ({ className, label, id, ...rest }) => {
  return (
    <label htmlFor={id} className={classNames(className, 'block')}>
      <span className="text-sm text-gray-600">{label}</span>
      <input className="py-2 px-3 border border-gray-300 hover:border-cyan-600 rounded-sm w-full outline-cyan-600" id={id} {...rest} />
    </label>
  )
}

export default Input