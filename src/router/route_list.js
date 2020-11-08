import React from 'react'
import Index from '../view/index'
import Course from '../view/course'
import Login from '../view/login'


const routeList = [
    {
        name: 'Index',
        path: '/',
        exact: true,
        render(props) {
            return <Index {...props} />
        }
    },
    {
        name: 'Course',
        path: '/course',
        exact: true,
        render(props) {
            return <Course {...props} />
        }
    },
    
    {
        name: 'Login',
        path: '/login',
        exact: true,
        render(props) {
            return <Login {...props} />
        }
    },
    

]

const navList = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        className: 'iconfont icon-home'
    },
    {
        name: 'Course',
        path: '/course',
        exact: true,
        className: 'iconfont icon-kecheng'
    }
    
]

export {
    routeList,
    navList
};