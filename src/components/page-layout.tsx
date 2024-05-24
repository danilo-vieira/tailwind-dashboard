import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'

export const PageLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-app antialiased">
      <Sidebar />

      <main className="px-8 pb-12 pt-8">
        <Outlet />
      </main>
    </div>
  )
}
