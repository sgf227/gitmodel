import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './common/context';
// import store from './common/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <StoreContext.Provider value={{}}>
            <ConfigProvider>
                <App />
            </ConfigProvider>
        </StoreContext.Provider>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
