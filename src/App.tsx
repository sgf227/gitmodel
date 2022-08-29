import './App.less';
import routes from './app.route';
import { useRoutes } from 'react-router-dom';
export const App = (): any => {
    return useRoutes(routes);
};
