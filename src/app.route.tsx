import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { NotFound404 } from './pages/errorpages/ErrorPages';
import { Learn } from './pages/learn/Learn';
import { Navigator } from './component/navigator/Navigator';
import { Foot } from './component/foot/Foot';
import { LearnDetail } from './pages/learn/learndetail/LearnDetail';

const routes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'project',
                children: [
                    {
                        index: true,
                        element: <Learn />,
                    },
                    {
                        path: 'detail',
                        element: <LearnDetail />,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: (
            <>
                <Navigator />,
                <NotFound404 />,
                <Foot />
            </>
        ),
    },
];

export default routes;
