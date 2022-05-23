import classNames from 'classnames'

const Checkbox: React.FC<React.AllHTMLAttributes<HTMLInputElement>> = ({ label, className, ...rest }) => {
  return (
    <label className={classNames(className, 'flex space-x-2 items-center')}>
      <input type="checkbox" className="accent-cyan-700 h-4 w-4" {...rest} />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  )
}

export default Checkbox