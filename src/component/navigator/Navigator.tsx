import {
    HomeOutlined,
    ProjectOutlined,
    OrderedListOutlined,
    PieChartOutlined,
    FireOutlined,
    BookOutlined,
    WechatOutlined,
    GithubOutlined,
} from '@ant-design/icons';
import { Menu, Tooltip } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './Navigator.less';
import { useAfterRender, useBeforeRender } from '../../utils/useUtils';
import { useNavigate } from 'react-router-dom';

export const Navigator: React.FC = () => {
    const [current, setCurrent] = useState('home');
    const navigate = useNavigate();

    const items = [
        {
            label: '主页',
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: '学习项目',
            key: 'project',
            icon: <ProjectOutlined />,
        },
        {
            label: '培养方案',
            key: 'plan',
            icon: <OrderedListOutlined />,
        },
        {
            label: '竞赛实践',
            key: 'contest',
            icon: <PieChartOutlined />,
        },
        {
            label: '热门',
            key: 'hot',
            icon: <FireOutlined />,
        },
        {
            label: '干货文章',
            key: 'article',
            icon: <BookOutlined />,
            children: [
                {
                    label: '科研求职',
                    key: 'article:1',
                },
                {
                    label: '项目实战',
                    key: 'article:2',
                },
            ],
        },
        {
            label: (
                <a
                    href="!#" // 禁止跳转
                    onClick={(e) => e.preventDefault()}
                    target="blank"
                    rel="noopener noreferrer"
                >
                    关于我们
                </a>
            ),
            key: 'alipay',
        },
    ];
    useBeforeRender(() => {
        console.log('useBeforeRender');
    });
    useAfterRender(() => {
        console.log('useAfterRender');
        setCurrentByUrl();
    });

    /** 刷新时选中路由对应的导航栏的那项 */
    const setCurrentByUrl = (): any => {
        setCurrent(window.location.pathname.split('/')[1]);
    };

    const onClick = (e: { keyPath: any; key: React.SetStateAction<string> }): void => {
        navigate(`/${String(e.keyPath.reverse().join('/'))}`); // 强制转String类型
        setCurrent(e.key);
    };

    const goGithub = (): void => {
        window.open('https://github.com/datawhalechina');
    };

    return (
        <div className="navigator">
            <div className="navigator-left">GitModel</div>
            <div className="navigator-center">
                <Menu
                    style={{
                        height: '56px',
                        lineHeight: '56px',
                        border: 'none',
                    }}
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                />
            </div>
            <div className="navigator-right">
                <Tooltip color="white" title={<img alt="can not found img" src="/qrcode.jpg" width="200px" />}>
                    <WechatOutlined className="navigator-right-logo" />
                </Tooltip>
                <GithubOutlined className="navigator-right-logo" onClick={goGithub} />
            </div>
        </div>
    );
};
