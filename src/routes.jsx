import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import SignUp from './pages/signup'
import Today from './pages/today-page'
import Login from './pages/login'
import Homepage from './pages/home-page'
import Trends from './pages/trends-page'
import Alerts from './pages/alerts-page'
import Tags from './pages/tags-page'
import Analysis from './pages/analysis-page'
import ForgotPassword from './pages/forgot-password'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/trends',
                element: <Trends />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/today',
                element: <Today />
            },
            {
                path: '/tags',
                element: <Tags />
            },
            {
                path: '/analysis',
                element: <Analysis />
            },
            {
                path: '/alerts',
                element: <Alerts />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
        ]
    }
])