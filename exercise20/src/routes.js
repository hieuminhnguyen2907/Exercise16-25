import React from 'react';
import { Route } from 'react-router-dom';
import UserList from './components/pages/UserList';
import UserDetail from './components/pages/UserDetail';
import DishList from './components/pages/DishList';
import DishDetail from './components/pages/DishDetail';
export const routes = [
    {
        path: '/',
        component: () => <h1>Home Page</h1>,
        exact: true,
    },
    {
        path: '/products',
        component: () => <h1>Products Page</h1>,
    },
    {
        path: '/about',
        component: () => <h1>About Page</h1>,
    },
    {
        path: '/contact',
        component: () => <h1>Contact Page</h1>,
    },
    {
        path: '/users',
        component: UserList,
    },
    {
        path: '/users/:id',
        component: UserDetail,
    },
    {
        path: '/dishes',
        component: DishList,
    },
    {
        path: '/dishes/:id',
        component: DishDetail,
    },
];

export const renderRoutes = () => {
    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
        />
    ));
};
