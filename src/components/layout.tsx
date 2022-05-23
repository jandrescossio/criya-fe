import { ChildrenProps } from '@/types/common'
import Header from './header'
import Footer from './footer'

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout