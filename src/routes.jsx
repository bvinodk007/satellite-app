import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import SignUp from './components/signup'
import Home from './components/home'
import Login from './components/login'
import Homepage from './components/homepage'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home-page',
                element: <Homepage />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])