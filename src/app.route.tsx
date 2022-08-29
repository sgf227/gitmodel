import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { NotFound404 } from './pages/errorpages/ErrorPages';
import { Learn } from './pages/learn/Learn';
import { Navigator } from './component/navigator/Navigator';
import { Footer } from './component/footer/Footer';

const routes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                index: true,
                element: (
                    <>
                        <Navigator />
                        <Home />
                        <Footer />
                    </>
                ),
            },
            {
                path: 'home',
                element: (
                    <>
                        <Navigator />
                        <Home />
                        <Footer />
                    </>
                ),
            },
            {
                path: 'project',
                element: (
                    <>
                        <Navigator />
                        <Learn />
                        <Footer />
                    </>
                ),
            },
        ],
    },
    {
        path: '*',
        element: (
            <>
                <Navigator />,
                <NotFound404 />,
                <Footer />
            </>
        ),
    },
];

export default routes;
