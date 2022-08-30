import React from 'react';
import 'antd/dist/antd.min.css';
import './Foot.less';

export const Foot: React.FC = () => {
    return (
        <div className="footer">
            <p className="copyright">
                DATAWHALE&nbsp;&nbsp;|&nbsp;&nbsp;和学习者一起成长&nbsp;&nbsp;|&nbsp;&nbsp;
                <a className="icp-link" href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
                    浙ICP备19012682号
                </a>
            </p>
        </div>
    );
};
