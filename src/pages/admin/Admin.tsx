import React from 'react';
import { Navigator } from '../../component/navigator/Navigator';
import { Footer } from '../../component/footer/Footer';
import './Admin.less';
// import { Home } from '../home/Home';
import { Learn } from '../learn/Learn';

export const Admin: React.FC = () => {
    return (
        <>
            <div style={{ minHeight: '90vh' }}>
                <Navigator />
                {/* <Home /> */}
                <Learn />
            </div>
            <Footer />
        </>
    );
};
