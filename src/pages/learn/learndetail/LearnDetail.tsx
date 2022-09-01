import { Anchor, Layout, Menu, Timeline } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Navigator } from '../../../component/navigator/Navigator';
import { AnyObj } from 'common/type';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useBeforeRender, useAfterRender } from 'utils/useUtils';
import './LearnDetail.less';
import '../../../common/common.less';
import { convertMarkdownToHtml } from 'utils/convertMarkdown';

export const LearnDetail: React.FC = () => {
    const { Content, Footer, Header } = Layout;
    const location: AnyObj<any> = useLocation();
    const inputRef: React.LegacyRef<HTMLDivElement> | undefined = React.createRef();
    const [menuItems, setMenuItems] = useState([]); // 左侧Menu数据
    const [current, setCurrent] = useState(''); // 左侧Menu数据选中的key
    const [htmlContent, setHtmlContent] = useState(''); // markdown文档内容
    const [tag, setTag] = useState(''); // tag内容
    const [anchorList, setAnchorList] = useState<AnyObj<any>>([]); // tag内容

    const data = {
        status: 200,
        data: {
            chapterId: 204,
            learnId: 0,
            title: '入门篇',
            content:
                "## 如何打一个数据挖掘比赛- 入门篇\n\n\n<font size=4>[**赛事链接**](https://challenge.xfyun.cn/topic/info?type=diabetes&ch=ds22-dw-zmt04)</font> &nbsp;&nbsp;| &nbsp;&nbsp;<font size=4>[**其他赛事一览**](https://linklearner.com/datawhale-homepage/#/competition)</font> \n\n<span style=\"background-color: #FFFAF0\">\n<fontsize=2>\n这是一份简易的竞赛教程，我们的目的是帮助同学们迈出 AI 训练大师之路的第一步。数据挖掘中会有很多需要学习的地方，建议入门的同学可以暂时不用着急去弄懂各个代码的原理，先跑通代码，然后看代码中的涉及的知识点去查询相关资料进行学习，这样能让你学习更加有目标性，也容易找到学习的乐趣。千里之行，始于足下，从这里，开启你的 AI 学习之旅吧！ \n—— 贡献者：牧小熊、骆秀韬</fontsize>\n</span>\n\n## 1.准备步骤\n### 平台注册与比赛报名\n1. 点击   [**赛事链接**](https://challenge.xfyun.cn/topic/info?type=diabetes&ch=ds22-dw-zmt04)\n2. 注册（记得填写个人信息）\n<div align=left>\n<img src=\"https://oss.linklearner.com/competition/datamining/1.png\" width=\"50%\">\n<img src=\"https://oss.linklearner.com/competition/datamining/2.png\" width=\"50%\">\n</div>\n\n3. 点击报名参赛，显示成功报名\n<div align=left>\n<img src=\"https://oss.linklearner.com/competition/datamining/3.png\" width=\"50%\">\n<img src=\"https://oss.linklearner.com/competition/datamining/4.png\" width=\"50%\">\n</div>\n\n### 数据下载\n- 数据获取\n  - 官网下载数据：[下载数据及实名认证](https://xj15uxcopw.feishu.cn/docx/doxcn11gwo7cEuAXWhCrDld4Inb)\n  - 请把数据文件和代码文件放在同一个文件夹下，保证正常运行\n环境配置\n- python的第三方库安装请参考 [Python的安装及第三方库的安装](https://zhuanlan.zhihu.com/p/414991679)\n\n## 2. 实践思路\n本次比赛是一个数据挖掘赛，需要选手通过训练集数据构建模型，然后对验证集数据进行预测，预测结果进行提交。\n\n本题的任务是构建一种模型根据患者的测试数据来预测这个患是不是的糖尿病，这是一个典型的二分类问题，模型的预测值就是0 或1 ，也就是得病或不得病。\n\n机器学习算法中对于分类任务，我们马上想到了这几个算法，逻辑回归、决策树等，因此可以想到构建决策树模型。\n\n<div align=left>\n<img src=\"https://oss.linklearner.com/competition/datamining/5.png\" width=\"100%\">\n</div>\n\n```\n当前版本：V2.0\n\n贡献者：\n\n- 代码贡献：牧小熊、司玉鑫\n\n\n- 代码评测：潘姝宇、王振东、骆秀韬\n\n贡献组织：\n\n- 厦门大学WISERCLUB-竞赛部\n\n[赛题链接](https://challenge.xfyun.cn/topic/info?type=diabetes&ch=ds22-dw-zmt04)\n```\n\n### 2.1 代码实现\n\n```python\n#安装相关依赖库 如果是windows系统，cmd命令框中输入pip安装，参考上述环境配置\n#!pip install sklearn\n#!pip install pandas\n#---------------------------------------------------\n#导入库\n#----------------数据探索----------------\nimport pandas as pd\nfrom sklearn.tree import DecisionTreeClassifier\n#数据预处理\ndata1=pd.read_csv('比赛训练集.csv',encoding='gbk')\ndata2=pd.read_csv('比赛测试集.csv',encoding='gbk')\n#label标记为-1\ndata2['患有糖尿病标识']=-1\n#训练集和测试机合并\ndata=pd.concat([data1,data2],axis=0,ignore_index=True)\n#将舒张压特征中的缺失值填充为-1\ndata['舒张压']=data['舒张压'].fillna(-1)\n\n#----------------特征工程----------------\n\"\"\"\n将出生年份换算成年龄\n\"\"\"\ndata['出生年份']=2022-data['出生年份']  #换成年龄\n\n\n\"\"\"\n人体的成人体重指数正常值是在18.5-24之间\n低于18.5是体重指数过轻\n在24-27之间是体重超重\n27以上考虑是肥胖\n高于32了就是非常的肥胖。\n\"\"\"\ndef BMI(a):\n    if a<18.5:\n        return 0\n    elif 18.5<=a<=24:\n        return 1\n    elif 24<a<=27:\n        return 2\n    elif 27<a<=32:\n        return 3\n    else:\n        return 4\n\ndata['BMI']=data['体重指数'].apply(BMI)\n\n#糖尿病家族史\n\"\"\"\n无记录\n叔叔或者姑姑有一方患有糖尿病/叔叔或姑姑有一方患有糖尿病\n父母有一方患有糖尿病\n\"\"\"\ndef FHOD(a):\n    if a=='无记录':\n        return 0\n    elif a=='叔叔或者姑姑有一方患有糖尿病' or a=='叔叔或姑姑有一方患有糖尿病':\n        return 1\n    else:\n        return 2\n\n\ndata['糖尿病家族史']=data['糖尿病家族史'].apply(FHOD)\n\"\"\"\n舒张压范围为60-90\n\"\"\"\ndef DBP(a):\n    if a<60:\n        return 0\n    elif 60<=a<=90:\n        return 1\n    elif a>90:\n        return 2\n    else:\n        return a\ndata['DBP']=data['舒张压'].apply(DBP)\n\n\n#------------------------------------\n#将处理好的特征工程分为训练集和测试集，其中训练集是用来训练模型，测试集用来评估模型准确度\n#其中编号和患者是否得糖尿病没有任何联系，属于无关特征予以删除\ntrain=data[data['患有糖尿病标识'] !=-1]\ntest=data[data['患有糖尿病标识'] ==-1]\ntrain_label=train['患有糖尿病标识']\ntrain=train.drop(['编号','患有糖尿病标识'],axis=1)\ntest=test.drop(['编号','患有糖尿病标识'],axis=1)\n\n#----------------模型训练----------------\nmodel = DecisionTreeClassifier()\nmodel.fit(train, train_label) \ny_pre=model.predict(test)\ny_pre\n\n#----------------结果输出----------------\nresult=pd.read_csv('提交示例.csv')\nresult['label']=y_pre\nresult.to_csv('result-de.csv',index=False)\n```\n\n### 2.2 结果提交\n- 在提交结果处提交\n\n\n\n选择刚才生成的result.csv点击提交\n\r\n<div align=left>\n<img src=\"https://oss.linklearner.com/competition/datamining/6.png\" width=\"100%\">\n</div>\n\n点击我的成绩查看结果\n\n<div align=left>\n<img src=\"https://oss.linklearner.com/competition/datamining/7.png\" width=\"100%\">\n</div>\n\n## 3. 学习提升\n### 3.1 反馈\n- 希望增加数据探索性分析，以及改进思路。 —— 余舍\n- 特征工程的部分有点玄学，然后参数调整又不是很会。—— 余舍\n- 希望加上决策树算法的学习\n### 3.2 提升思路\n\n- 数据挖掘流程讲解及参考学习资料：[xunfei_demo.ipynb](https://oss.linklearner.com/competition/datamining/xunfei_demo.ipynb)\n- 经过上面的学习，你成功的提交了比赛数据，那么进一步应该如何提升呢？\n\n#### 3.2.1 数据探索性分析\n\nTips：数据探索的目的包括得到数据的直觉、发掘潜在的结构、提取重要的变量、删除异常值、建议潜在的假设和建立初步的模型等\n\r\npython中用于数据探索的主要工具如下：\n\r\n- Numpy：可以高效处理数据、提供数组支持\n- Pandas：数据处理中使用最多的一个模型，主要用于数据探索和数据分析\n- Matplotlib：作图模块，使数据可视化\n- Scipy：主要用于数值计算\n\n## 4. 提问\n如您遇到更多问题，可在Q&A文档中记录，我们会跟进反馈\n[https://docs.qq.com/sheet/DUEVNbENIT1ZiZ2t2?tab=BB08J2](https://docs.qq.com/sheet/DUEVNbENIT1ZiZ2t2?tab=BB08J2)\n\n### 版本更新记录：\n2.0版\n\n- 代码中lightGBM算法改成经典的决策树算法\n- 增加了初学者的学习建议\n- 增加了数据挖掘比赛实践的流程图",
        },
        message: 'success',
    };

    useBeforeRender(() => {
        console.log('useBeforeRender');
        const { html, tag } = convertMarkdownToHtml(data.data.content);
        setHtmlContent(html);
        setTag(tag);
        initMenuItems();
    });
    useAfterRender(() => {
        console.log('useAfterRender');
    });

    useEffect(() => {
        if (tag !== '') {
            console.log('tag=', tag);
            generateAnchorList();
        }
    }, [tag]);

    /** 左侧Menu点击事件 */
    const onMenuClick = (e: { key: React.SetStateAction<string> }): void => {
        setCurrent(e.key);
    };

    /** 初始化左侧Menu数据 */
    const initMenuItems = (): any => {
        if (location.state?.detailList === undefined) return;
        const menuData = location.state.detailList.map((item: { chapterId: string; title: any }) => {
            const data = { key: `${item.chapterId}`, label: item.title };
            return data;
        });
        setMenuItems(menuData);
        setCurrent(menuData[0].key); // 默认选中第一个章节
    };
    /** 生成Anchor锚点列表 */
    const generateAnchorList = (): any => {
        const output: AnyObj<any> = [];
        console.log(inputRef.current, tag);
        const elementList: HTMLCollectionOf<Element> | undefined = inputRef.current?.getElementsByTagName(tag);
        if (elementList !== undefined && elementList.length > 0) {
            for (let a = 0; a < elementList.length; a++) {
                const element = elementList[a];
                const elementContent = element.textContent;
                output.push({
                    href: `#${(element.parentNode as HTMLDivElement).id}`,
                    name: elementContent,
                });
            }
        }
        console.log(output);
        setAnchorList(output);
    };

    return (
        <Layout>
            <Header className="header">
                <Navigator />
            </Header>
            <Layout hasSider className="layout-inner">
                <Sider
                    theme="light"
                    style={{
                        height: '85vh',
                        position: 'fixed',
                        overflow: 'auto',
                    }}
                >
                    <Menu onClick={onMenuClick} selectedKeys={[current]} mode="inline" theme="light" items={menuItems} />
                </Sider>
                <Content className="learn-detail">
                    <div className="learn-detail-content" dangerouslySetInnerHTML={{ __html: htmlContent }} ref={inputRef}></div>
                    <div className="learn-detail-anchor">
                        <Anchor affix={true}>
                            <Timeline>
                                {anchorList.map((item, index) => (
                                    <Timeline.Item key={index}>
                                        <a href={item.href}>{item.name}</a>
                                    </Timeline.Item>
                                ))}
                            </Timeline>
                        </Anchor>
                    </div>
                </Content>
            </Layout>
            <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};
