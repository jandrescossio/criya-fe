import { CardProps } from '@/types/card'

export default function Card ({ children, title }: CardProps) {
  return (
    <div className="bg-white shadow rounded-sm py-7 px-6">
      {
        title && (
          <h2 className="text-2xl text-gray-700 text-center font-semibold mb-3">{title}</h2>
        )
      }
      {children}
    </div>
  )
}
