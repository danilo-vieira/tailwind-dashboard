import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { PageLayout } from './components/page-layout'

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
