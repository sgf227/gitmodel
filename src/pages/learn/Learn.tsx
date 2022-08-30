import React from 'react';
import { Layout, Radio } from 'antd';
import './Learn.less';
import '../../common/common.less';
import { useBeforeRender } from './../../utils/useUtils';
import { reqProject, reqWeather } from 'api';
import { AnyObj } from 'common/type';
import { useNavigate } from 'react-router-dom';
import { Navigator } from '../../component/navigator/Navigator';
export const Learn: React.FC = () => {
    const { Content, Footer, Header } = Layout;
    const navigate = useNavigate();
    const projectList = [
        {
            id: 0,
            name: '如何打一个数据挖掘比赛',
            description:
                '这是一份简易的竞赛教程，我们的目的是帮助同学们迈出 AI 训练大师之路的第一步。数据挖掘中会有很多需要学习的地方，建议入门的同学可以暂时不用着急去弄懂各个代码的原理，先跑通代码，然后看代码中的涉及的知识点去查询相关资料进行学习，这样能让你学习更加有目标性，也容易找到学习的乐趣。千里之行，始于足下，从这里，开启你的 AI 学习之旅吧！ —— 贡献者：牧小熊、骆秀韬',
            imageUrl: 'https://oss.linklearner.com/learning-project/datamining.png',
            like: 52,
            tagList: [
                {
                    tagId: 1,
                    tagName: '机器学习',
                },
                {
                    tagId: 7,
                    tagName: '数据分析',
                },
            ],
            detailList: [
                {
                    chapterId: 204,
                    title: '入门篇',
                },
                {
                    chapterId: 207,
                    title: '进阶篇',
                },
            ],
        },
        {
            id: 1,
            name: '如何打一个NLP比赛',
            description:
                '是一个典型的文本分类任务。由于文本数据是典型的非结构化数据，此类实践的处理通常涉及到 特征提取 和 分类模型 两部分。常见的思路有两种：基于机器学习的思路和基于深度学习的思路。',
            imageUrl: 'https://oss.linklearner.com/learning-project/nlp.png',
            like: 53,
            tagList: [
                {
                    tagId: 10,
                    tagName: '深度学习',
                },
            ],
            detailList: [
                {
                    chapterId: 211,
                    title: '入门篇',
                },
            ],
        },
        {
            id: 2,
            name: '如何打一个推荐系统比赛',
            description:
                '本次比赛是一个经典点击率预估（CTR）的数据挖掘赛，需要选手通过训练集数据构建模型，然后对验证集数据进行预测，预测结果进行提交。',
            imageUrl: 'https://oss.linklearner.com/learning-project/recommendation.png',
            like: 54,
            tagList: [
                {
                    tagId: 11,
                    tagName: '推荐系统',
                },
            ],
            detailList: [
                {
                    chapterId: 212,
                    title: '入门篇',
                },
                {
                    chapterId: 213,
                    title: '附：报名及数据下载',
                },
            ],
        },
        {
            id: 10,
            name: '南瓜书 PumpkinBook',
            description:
                '人工智能领域中文的开山之作、周志华“西瓜书”《机器学习》伴侣书，Datawhale开源协作学习笔记“南瓜书”，机器学习初学小白提升数学基础能力的练习书！',
            imageUrl: 'https://oss.linklearner.com/learning-project/pumpkin-book.jpeg',
            like: 50,
            tagList: [
                {
                    tagId: 1,
                    tagName: '机器学习',
                },
                {
                    tagId: 2,
                    tagName: '人工智能',
                },
            ],
            detailList: [
                {
                    chapterId: 74,
                    title: '【南瓜书】前言',
                },
                {
                    chapterId: 1,
                    title: '第1章 绪论',
                },
                {
                    chapterId: 2,
                    title: '第2章 模型评估与选择',
                },
                {
                    chapterId: 3,
                    title: '第3章 线性模型',
                },
                {
                    chapterId: 4,
                    title: '第4章 决策树',
                },
                {
                    chapterId: 5,
                    title: '第5章 神经网络',
                },
                {
                    chapterId: 6,
                    title: '第6章 支持向量机',
                },
                {
                    chapterId: 7,
                    title: '第7章 贝叶斯分类器',
                },
                {
                    chapterId: 8,
                    title: '第8章 集成学习',
                },
                {
                    chapterId: 9,
                    title: '第9章 聚类',
                },
                {
                    chapterId: 10,
                    title: '第10章 降维与度量学习',
                },
                {
                    chapterId: 11,
                    title: '第11章 特征选择与稀疏学习',
                },
                {
                    chapterId: 12,
                    title: '第12章 计算学习理论',
                },
                {
                    chapterId: 13,
                    title: '第13章 半监督学习',
                },
                {
                    chapterId: 14,
                    title: '第14章 概率图模型',
                },
                {
                    chapterId: 15,
                    title: '第15章 规则学习',
                },
                {
                    chapterId: 16,
                    title: '第16章 强化学习',
                },
            ],
        },
        {
            id: 20,
            name: 'Joyful-Pandas',
            description: '本教程共有十章，可分为三大模块：基础知识、四类操作、四类数据，涵盖了pandas的所有核心操作与特性。',
            imageUrl: 'https://oss.linklearner.com/learning-project/joyful-pandas.png',
            like: 49,
            tagList: [
                {
                    tagId: 3,
                    tagName: 'python',
                },
                {
                    tagId: 4,
                    tagName: 'pandas',
                },
            ],
            detailList: [
                {
                    chapterId: 62,
                    title: '【Joyful-pandas】前言',
                },
                {
                    chapterId: 63,
                    title: '第一章 预备知识',
                },
                {
                    chapterId: 64,
                    title: '第二章 pandas基础',
                },
                {
                    chapterId: 65,
                    title: '第三章 索引',
                },
                {
                    chapterId: 66,
                    title: '第四章 分组',
                },
                {
                    chapterId: 67,
                    title: '第五章 变形',
                },
                {
                    chapterId: 68,
                    title: '第六章 连接',
                },
                {
                    chapterId: 69,
                    title: '第七章 缺失数据',
                },
                {
                    chapterId: 70,
                    title: '第八章 文本数据',
                },
                {
                    chapterId: 71,
                    title: '第九章 分类数据',
                },
                {
                    chapterId: 72,
                    title: '第十章 时序数据',
                },
                {
                    chapterId: 73,
                    title: '参考答案',
                },
            ],
        },
        {
            id: 30,
            name: 'fantastic-matplotlib',
            description:
                'Matplotlib可以说是python数据可视化最重要且常见的工具之一，每一位和数据打交道的人几乎都不可避免要用到，此外也有大量的可视化工具是基于matplotlib做的二次开发。',
            imageUrl: 'https://oss.linklearner.com/learning-project/Fantastic-Matplotlib.png',
            like: 48,
            tagList: [
                {
                    tagId: 2,
                    tagName: '人工智能',
                },
                {
                    tagId: 7,
                    tagName: '数据分析',
                },
            ],
            detailList: [
                {
                    chapterId: 130,
                    title: '【Fantastic-Matplotlib】前言',
                },
                {
                    chapterId: 131,
                    title: '第一回：Matplotlib初相识',
                },
                {
                    chapterId: 132,
                    title: '第二回：艺术画笔见乾坤',
                },
                {
                    chapterId: 133,
                    title: '第三回：布局格式定方圆',
                },
                {
                    chapterId: 134,
                    title: '第四回：文字图例尽眉目',
                },
                {
                    chapterId: 135,
                    title: '第五回：样式色彩秀芳华',
                },
            ],
        },
        {
            id: 40,
            name: '集成学习：从原理到实现',
            description:
                '本课程将对机器学习中的集成学习模型进行理论讲解和代码实践，涵盖了决策树、集成模式等内容，带领读者使用numpy构建相关模块，深入理解算法原理与实现。 ',
            imageUrl: 'https://oss.linklearner.com/learning-project/ML-FTTI.png',
            like: 46,
            tagList: [
                {
                    tagId: 6,
                    tagName: '集成学习',
                },
            ],
            detailList: [],
        },
        {
            id: 50,
            name: '动手学数据分析',
            description:
                '关于我们项目的名字——动手学数据分析（Hands-on data analysis）。数据分析是一个要从一堆数字中看到真相的过程。学会操作数据只是数据分析的一半功力，剩下的另一半要用我们的大脑，多多思考，多多总结，更要多动手，实打实的的敲代码。所以也希望在学习这门课时，多去推理，多去问问为什么；多多练习，确保理论实践结合起来，在课程结束的时候一定会有大收获。',
            imageUrl: 'https://oss.linklearner.com/learning-project/hands-on-data-analysis.png',
            like: 47,
            tagList: [
                {
                    tagId: 1,
                    tagName: '机器学习',
                },
                {
                    tagId: 7,
                    tagName: '数据分析',
                },
            ],
            detailList: [
                {
                    chapterId: 90,
                    title: '【动手学数据分析】前言',
                },
                {
                    chapterId: 77,
                    title: '1.1（课程）数据载入及初步观察',
                },
                {
                    chapterId: 79,
                    title: '1.2 （课程）pandas基础',
                },
                {
                    chapterId: 81,
                    title: '1.3 （课程）探索性数据分析',
                },
                {
                    chapterId: 83,
                    title: '2.1 （课程）数据清洗及特征处理',
                },
                {
                    chapterId: 85,
                    title: '2.2 （课程）数据重构1',
                },
                {
                    chapterId: 87,
                    title: '2.3 （课程）数据重构2',
                },
                {
                    chapterId: 88,
                    title: '2.4 （课程）数据可视化',
                },
                {
                    chapterId: 91,
                    title: '3.1 （课程）模型建立和评估--建模',
                },
                {
                    chapterId: 93,
                    title: '3.2 （课程）模型建立和评估---评价',
                },
                {
                    chapterId: 78,
                    title: '1.1 （答案）数据载入及初步观察',
                },
                {
                    chapterId: 80,
                    title: '1.2 （答案）pandas基础',
                },
                {
                    chapterId: 82,
                    title: '1.3 （答案）探索性数据分析',
                },
                {
                    chapterId: 84,
                    title: '2.1 （答案）数据清洗及特征处理',
                },
                {
                    chapterId: 86,
                    title: '2.2 （答案）数据重构1',
                },
                {
                    chapterId: 95,
                    title: '2.3 （答案）数据重构2',
                },
                {
                    chapterId: 89,
                    title: '2.4 （答案）数据可视化',
                },
                {
                    chapterId: 92,
                    title: '3.1 （答案）模型建立和评估--建模',
                },
                {
                    chapterId: 94,
                    title: '3.2 （答案）模型建立和评估---评价',
                },
            ],
        },
        {
            id: 60,
            name: 'PythonThinking',
            description:
                '课程是由MIT6.00计算机科学和编程导论和笨方法学python结合编写的，为的是帮助零基础的同学更好和更容易学习，因为我是在学习不同课程时碰到很多问题，原因是基础没打好，通过学习这个课程可以清楚了解编程思维、代码规范、防御性编程等，为以后的学习打好基础。',
            imageUrl: 'https://oss.linklearner.com/learning-project/PythonThinking.png',
            like: 45,
            tagList: [
                {
                    tagId: 3,
                    tagName: 'python',
                },
            ],
            detailList: [
                {
                    chapterId: 96,
                    title: '【PythonThinking】前言',
                },
                {
                    chapterId: 97,
                    title: '第1章 环境搭建与认识学习方法',
                },
                {
                    chapterId: 98,
                    title: '第2章 数学运算、字符串和文本、列表',
                },
                {
                    chapterId: 99,
                    title: '第3章 字典、元组、布尔类型、读写文件',
                },
                {
                    chapterId: 120,
                    title: '课后练习及补充1（2&3章）',
                },
                {
                    chapterId: 100,
                    title: '第4章 函数',
                },
                {
                    chapterId: 101,
                    title: '第5章 编程习惯养成与思维',
                },
                {
                    chapterId: 102,
                    title: '第6章 FOR、IF以及while',
                },
                {
                    chapterId: 103,
                    title: '第7章 面向对象的编程',
                },
            ],
        },
        {
            id: 70,
            name: 'wonderful-sql',
            description:
                '在诸多领域中 SQL 应用广泛，数据分析、开发、测试、维护、产品经理等都有可能会用到SQL，而在学校里系统性讲授 SQL 的课程较少，但是面试及工作中却经常会涉及到 SQL。这就要求我们提前掌握这一技能。笔者在多年的学习过程中，发现了一本很好的教材《SQL基础教程 第2版》作者：MICK，感觉很有必要分享出来，笔者便联合DataWhale团队成员结合该教材及其他学习资源编写了此学习材料。希望可以帮助你更好的掌握 SQL。',
            imageUrl: 'https://oss.linklearner.com/learning-project/wonderful-sql.png',
            like: 44,
            tagList: [
                {
                    tagId: 8,
                    tagName: 'SQL',
                },
            ],
            detailList: [
                {
                    chapterId: 136,
                    title: '【wonderful-sql】前言',
                },
                {
                    chapterId: 104,
                    title: '环境搭建',
                },
                {
                    chapterId: 105,
                    title: '第一章 初识数据库',
                },
                {
                    chapterId: 106,
                    title: '第二章 基础查询与排序',
                },
                {
                    chapterId: 107,
                    title: '第三章 复杂一点的查询',
                },
                {
                    chapterId: 108,
                    title: '第四章 集合运算',
                },
                {
                    chapterId: 109,
                    title: '第五章 SQL高级处理',
                },
                {
                    chapterId: 110,
                    title: '第六章 决胜秋招',
                },
            ],
        },
        {
            id: 80,
            name: '钥匙书key-book',
            description:
                '《钥匙书》这本参考笔记的初衷是帮助读者理解周志华、王魏、高尉、张利军等老师所著的《机器学习理论导引》一书（下称《导引》）。这既是着眼于那些阅读《导引》时遇到困难的读者，助其更快地走出迷雾；亦是对学习《导引》一书之过程的最好记录。',
            imageUrl: 'https://oss.linklearner.com/learning-project/key-book.png',
            like: 43,
            tagList: [
                {
                    tagId: 1,
                    tagName: '机器学习',
                },
            ],
            detailList: [
                {
                    chapterId: 111,
                    title: '【钥匙书】前言',
                },
                {
                    chapterId: 112,
                    title: '第一章 预备知识',
                },
                {
                    chapterId: 113,
                    title: '第二章 可学性',
                },
                {
                    chapterId: 114,
                    title: '第三章 复杂性',
                },
                {
                    chapterId: 115,
                    title: '第四章 泛化界',
                },
                {
                    chapterId: 116,
                    title: '第五章 稳定性',
                },
                {
                    chapterId: 117,
                    title: '第六章 一致性',
                },
                {
                    chapterId: 118,
                    title: '第七章 收敛率',
                },
                {
                    chapterId: 119,
                    title: '第八章 遗憾界',
                },
            ],
        },
        {
            id: 90,
            name: '妙趣横生大数据 Juicy Big Data',
            description:
                '当今的时代处处充斥着大数据的影子，大数据技术也为信息技术发展带来了重大的变革，并深刻影响着人们生活的方方面面。而我们旨在带领大家走进大数据时代的浪潮中，理解并能够使用目前主流的大数据处理架构Hadoop解决相应的问题，从小白到实践者。\n\n',
            imageUrl: 'https://oss.linklearner.com/learning-project/juicy-bigdata.png',
            like: 42,
            tagList: [
                {
                    tagId: 9,
                    tagName: '大数据',
                },
            ],
            detailList: [
                {
                    chapterId: 121,
                    title: '【Juicy Big Data】前言',
                },
                {
                    chapterId: 122,
                    title: '大数据概述',
                },
                {
                    chapterId: 123,
                    title: 'Hadoop',
                },
                {
                    chapterId: 124,
                    title: 'HDFS',
                },
                {
                    chapterId: 125,
                    title: 'HBase',
                },
                {
                    chapterId: 126,
                    title: 'MapReduce',
                },
                {
                    chapterId: 127,
                    title: 'Hive',
                },
                {
                    chapterId: 128,
                    title: 'Spark',
                },
                {
                    chapterId: 129,
                    title: '大数据处理技术总结',
                },
            ],
        },
        {
            id: 91,
            name: '强化学习 EasyRL',
            description:
                '李宏毅老师的《深度强化学习》是强化学习领域经典的中文视频之一。对于想入门强化学习又想看中文讲解的人来说绝对是非常推荐的。',
            imageUrl: 'https://oss.linklearner.com/learning-project/easy-rl.png',
            like: 41,
            tagList: [
                {
                    tagId: 5,
                    tagName: '强化学习',
                },
            ],
            detailList: [
                {
                    chapterId: 75,
                    title: '【EasyRL】前言',
                },
                {
                    chapterId: 34,
                    title: '第一章 概述',
                },
                {
                    chapterId: 35,
                    title: '第一章 习题',
                },
                {
                    chapterId: 36,
                    title: '第二章 马尔科夫决策模型（MDP）',
                },
                {
                    chapterId: 37,
                    title: '第二章 习题',
                },
                {
                    chapterId: 38,
                    title: '第三章 表格型方法',
                },
                {
                    chapterId: 39,
                    title: '第三章 习题',
                },
                {
                    chapterId: 40,
                    title: '项目一 使用Q-learning解决悬崖寻路问题',
                },
                {
                    chapterId: 41,
                    title: '第四章 策略梯度',
                },
                {
                    chapterId: 42,
                    title: '第四章 习题',
                },
                {
                    chapterId: 43,
                    title: '第五章 近端策略优化（PPO）算法',
                },
                {
                    chapterId: 44,
                    title: '第五章 习题',
                },
                {
                    chapterId: 45,
                    title: '第六章 DQN基本概念',
                },
                {
                    chapterId: 46,
                    title: '第六章 习题',
                },
                {
                    chapterId: 47,
                    title: '第七章 DQN进阶技巧',
                },
                {
                    chapterId: 48,
                    title: '第七章 习题',
                },
                {
                    chapterId: 49,
                    title: '项目二 使用DQN实现CartPole-v0',
                },
                {
                    chapterId: 50,
                    title: '第八章 连续动作',
                },
                {
                    chapterId: 51,
                    title: '第八章 习题',
                },
                {
                    chapterId: 52,
                    title: '第九章 演员-评论家算法',
                },
                {
                    chapterId: 53,
                    title: '第九章 习题',
                },
                {
                    chapterId: 54,
                    title: '第十章 稀疏奖励',
                },
                {
                    chapterId: 55,
                    title: '第十章 习题',
                },
                {
                    chapterId: 56,
                    title: '第十一章 模仿学习',
                },
                {
                    chapterId: 57,
                    title: '第十一章 习题',
                },
                {
                    chapterId: 58,
                    title: '第十二章 DDPG算法',
                },
                {
                    chapterId: 59,
                    title: '第十二章 习题',
                },
                {
                    chapterId: 60,
                    title: '项目三 使用Policy-Based方法实现Pendulum-v0',
                },
                {
                    chapterId: 61,
                    title: '第十三章 AlphaStar论文解读',
                },
            ],
        },
        {
            id: 92,
            name: '深入浅出PyTorch',
            description:
                'PyTorch是利用深度学习进行数据科学研究的重要工具，在灵活性、可读性和性能上都具备相当的优势，近年来已成为学术界实现深度学习算法最常用的框架。',
            imageUrl: 'https://oss.linklearner.com/learning-project/PyTorch.png',
            like: 40,
            tagList: [
                {
                    tagId: 10,
                    tagName: '深度学习',
                },
            ],
            detailList: [
                {
                    chapterId: 137,
                    title: '第一章 PyTorch简介和安装',
                },
                {
                    chapterId: 138,
                    title: '第二章 PyTorch基础知识',
                },
                {
                    chapterId: 140,
                    title: '代码演示：PyTorch基础知识',
                },
                {
                    chapterId: 139,
                    title: '第三章 PyTorch的主要组成模块',
                },
                {
                    chapterId: 141,
                    title: '第四章 PyTorch基础实战',
                },
                {
                    chapterId: 142,
                    title: '第五章 PyTorch模型定义',
                },
                {
                    chapterId: 143,
                    title: '第六章 PyTorch进阶训练技巧',
                },
                {
                    chapterId: 144,
                    title: '第七章 PyTorch可视化',
                },
                {
                    chapterId: 145,
                    title: '第八章 PyTorch生态简介',
                },
            ],
        },
        {
            id: 93,
            name: '李宏毅机器学习',
            description:
                '这个笔记是根据李宏毅老师机器学习视频的一个辅助资料，本笔记基本上完全复刻李老师课堂上讲的所有内容，并加入了一些和相关的学习补充资料和参考资料，结合这些资料一起学习，相信你会对机器学习有更加深刻的理解。\n\n',
            imageUrl: 'https://oss.linklearner.com/learning-project/leeml.png',
            like: 39,
            tagList: [
                {
                    tagId: 1,
                    tagName: '机器学习',
                },
            ],
            detailList: [
                {
                    chapterId: 146,
                    title: '第一章 机器学习介绍',
                },
                {
                    chapterId: 147,
                    title: '第二章 为什么要学习机器学习',
                },
                {
                    chapterId: 148,
                    title: '第三章 回归',
                },
                {
                    chapterId: 149,
                    title: '第四章 回归-演示',
                },
                {
                    chapterId: 150,
                    title: '第五章 误差从哪里来',
                },
                {
                    chapterId: 151,
                    title: '第六章 梯度下降',
                },
                {
                    chapterId: 152,
                    title: '第七章 梯度下降（用AOE演示）',
                },
                {
                    chapterId: 153,
                    title: '第八章 梯度下降（用Minecraft演示）',
                },
                {
                    chapterId: 154,
                    title: '第九章 作业1-PM2.5预测',
                },
                {
                    chapterId: 155,
                    title: '第十章 概率分类模型',
                },
                {
                    chapterId: 156,
                    title: '第十一章 logistic回归',
                },
                {
                    chapterId: 157,
                    title: '第十二章 作业2-赢家还是输家',
                },
                {
                    chapterId: 158,
                    title: '第十三章 深度学习简介',
                },
                {
                    chapterId: 159,
                    title: '第十四章 反向传播',
                },
                {
                    chapterId: 160,
                    title: '第十五章 深度学习初试',
                },
                {
                    chapterId: 161,
                    title: '第十六章 Keras2.0',
                },
                {
                    chapterId: 162,
                    title: '第十七章 Keras演示',
                },
                {
                    chapterId: 163,
                    title: '第十八章 深度学习技巧',
                },
                {
                    chapterId: 164,
                    title: '第十九章 Keras演示2',
                },
                {
                    chapterId: 165,
                    title: '第二十章 Tensorflow实现Fizz Buzz',
                },
                {
                    chapterId: 166,
                    title: '第二十一章 卷积神经网络',
                },
                {
                    chapterId: 167,
                    title: '第二十二章 为什么要“深度”学习',
                },
                {
                    chapterId: 168,
                    title: '第二十三章 半监督学习',
                },
                {
                    chapterId: 169,
                    title: '第二十四章 无监督学习-线性降维',
                },
                {
                    chapterId: 170,
                    title: '第二十五章 无监督学习-词嵌入',
                },
                {
                    chapterId: 171,
                    title: '第二十六章 无监督学习-领域嵌入',
                },
                {
                    chapterId: 172,
                    title: '第二十七章 无监督学习-深度自编码器',
                },
                {
                    chapterId: 173,
                    title: '第二十八章 无监督学习-深度生成模型l',
                },
                {
                    chapterId: 174,
                    title: '第二十九章 无监督学习-深度生成模型ll',
                },
                {
                    chapterId: 175,
                    title: '第三十章 迁移学习',
                },
                {
                    chapterId: 176,
                    title: '第三十一章 支持向量机',
                },
                {
                    chapterId: 177,
                    title: '第三十二章 结构化学习-介绍',
                },
                {
                    chapterId: 178,
                    title: '第三十三章 结构化学习-线性模型',
                },
                {
                    chapterId: 179,
                    title: '第三十四章 结构化学习-结构化支持向量机',
                },
                {
                    chapterId: 180,
                    title: '第三十五章 结构化学习-序列标注',
                },
                {
                    chapterId: 181,
                    title: '第三十六章 循环神经网络l',
                },
                {
                    chapterId: 182,
                    title: '第三十七章 循环神经网络ll',
                },
                {
                    chapterId: 183,
                    title: '第三十八章 集成学习',
                },
                {
                    chapterId: 184,
                    title: '第三十九章 深度强化学习浅析',
                },
                {
                    chapterId: 185,
                    title: '第四十章 机器学习的下一步',
                },
                {
                    chapterId: 186,
                    title: '第四十一章 异常检测（1）',
                },
                {
                    chapterId: 187,
                    title: '第四十二章 异常检测（2）',
                },
                {
                    chapterId: 188,
                    title: '第四十三章 异常检测（3）',
                },
                {
                    chapterId: 189,
                    title: '第四十四章 异常检测（4）',
                },
                {
                    chapterId: 190,
                    title: '第四十五章 异常检测（5）',
                },
                {
                    chapterId: 191,
                    title: '第四十六章 异常检测（6）',
                },
                {
                    chapterId: 192,
                    title: '第四十七章 异常检测（7）',
                },
                {
                    chapterId: 193,
                    title: '第四十八章 对抗机器学习模型（1）',
                },
            ],
        },
        {
            id: 94,
            name: 'Python自动化办公',
            description: '使用Python对常用办公软件进行操作，彻底解放双手，一行和一万行一个样！',
            imageUrl: 'https://oss.linklearner.com/learning-project/office-automation-main.png',
            like: 38,
            tagList: [
                {
                    tagId: 3,
                    tagName: 'python',
                },
                {
                    tagId: 7,
                    tagName: '数据分析',
                },
            ],
            detailList: [
                {
                    chapterId: 194,
                    title: '第一章 文件处理与邮件自动化',
                },
                {
                    chapterId: 195,
                    title: '第二章 Python与Excel',
                },
                {
                    chapterId: 196,
                    title: '第三章 Python与Word和PDF',
                },
                {
                    chapterId: 197,
                    title: '第四章 简单的Python爬虫',
                },
                {
                    chapterId: 198,
                    title: '第五章 Python操作钉钉自动化',
                },
                {
                    chapterId: 199,
                    title: '第六章 其他推荐软件和网页',
                },
            ],
        },
        {
            id: 99,
            name: '华为CV项目实践排行榜',
            description: '车道渲染数据智能质检',
            imageUrl: 'https://oss.linklearner.com/learning-project/road_cv.png',
            like: null,
            tagList: [],
            detailList: [
                {
                    chapterId: 221,
                    title: '个人排行榜',
                },
                {
                    chapterId: 224,
                    title: '高校排行榜',
                },
            ],
        },
        {
            id: 100,
            name: '科大讯飞时间序列项目实践排行榜',
            description: ' -- 电动汽车永磁同步电机温度预测',
            imageUrl: 'https://oss.linklearner.com/learning-project/electric_car.png',
            like: null,
            tagList: [],
            detailList: [
                {
                    chapterId: 222,
                    title: '个人排行榜',
                },
                {
                    chapterId: 223,
                    title: '高校排行榜',
                },
            ],
        },
        {
            id: 101,
            name: '零基础入门推荐系统竞赛实践排行榜',
            description: ' -- 参与组队学习同学的成绩排行榜',
            imageUrl: 'https://oss.linklearner.com/learning-project/groupstudy_40_rec.png',
            like: 37,
            tagList: [],
            detailList: [
                {
                    chapterId: 220,
                    title: '个人排行榜',
                },
            ],
        },
        {
            id: 102,
            name: '华为推荐系统项目实践排行榜',
            description: ' -- 广告-信息流跨域ctr预估',
            imageUrl: 'https://oss.linklearner.com/learning-project/recommendation-ranking.png',
            like: 33,
            tagList: [],
            detailList: [
                {
                    chapterId: 215,
                    title: '个人排行榜',
                },
                {
                    chapterId: 216,
                    title: '高校排行榜',
                },
            ],
        },
        {
            id: 103,
            name: '科大讯飞CV项目实践排行榜',
            description: ' -- 智能硬件语音控制的时频图分类挑战赛',
            imageUrl: 'https://oss.linklearner.com/learning-project/CV.png',
            like: 32,
            tagList: [],
            detailList: [
                {
                    chapterId: 214,
                    title: '个人排行榜',
                },
                {
                    chapterId: 217,
                    title: '高校排行榜',
                },
            ],
        },
        {
            id: 104,
            name: '科大讯飞NLP项目实践排行榜',
            description: ' -- 基于论文摘要的文本分类与查询性问答',
            imageUrl: 'https://oss.linklearner.com/competition/ifly-2022/nlp-ranking.png',
            like: 31,
            tagList: [],
            detailList: [
                {
                    chapterId: 209,
                    title: '个人排行榜',
                },
                {
                    chapterId: 210,
                    title: '高校排行榜',
                },
            ],
        },
        {
            id: 105,
            name: '科大讯飞数据挖掘项目实践排行榜',
            description: ' -- 糖尿病遗传风险检测挑战赛',
            imageUrl: 'https://oss.linklearner.com/competition/ifly-2022/ranking.png',
            like: 30,
            tagList: [],
            detailList: [
                {
                    chapterId: 206,
                    title: '个人排行榜',
                },
                {
                    chapterId: 208,
                    title: '高校排行榜',
                },
            ],
        },
        {
            id: 106,
            name: 'Datawhale优质赛事方案分享集',
            description: '整理优质赛事方案集合，帮助大家更方便地参加各种赛事练习实践',
            imageUrl: 'https://oss.linklearner.com/learning-project/competition.png',
            like: 51,
            tagList: [],
            detailList: [
                {
                    chapterId: 201,
                    title: '糖尿病遗传风险检测挑战赛方案',
                },
                {
                    chapterId: 202,
                    title: '汽车多语种挑战赛方案',
                },
                {
                    chapterId: 203,
                    title: '神经影像疾病预测方案',
                },
            ],
        },
        {
            id: 107,
            name: '计算之魂',
            description:
                '《计算之魂》是《数学之美》姊妹篇，是吴军博士时隔近10年在科技领域的重磅新作。在本书中，作者将人文历史与计算机科学相结合，通过一些具体的例题，分10个主题系统地讲解了计算机科学的精髓。全书的例题+思考题超100道，这些例题是作者面试求职者时用到的考题，或是头部计算机公司和金融企业的面试题。\n\n我们将共读《计算之魂》并围绕这些思考题进行交流探讨，项目持续约1年，过程中会邀请《计算之魂》策划者等大咖，甚至吴军老师来直播分享，一起培养计算思维的方式，了解 IT 产业的技术特点、掌握信息时代特殊的做事方法，通过思维的碰撞与具体的例子，从“术”的层面获得“道”的层面的提升。',
            imageUrl: 'https://oss.linklearner.com/learning-project/the-soul-of-calculation.png',
            like: 10,
            tagList: [],
            detailList: [
                {
                    chapterId: 218,
                    title: '第1章-毫厘千里之差',
                },
            ],
        },
    ];

    const tagList = [
        {
            tagId: '1',
            name: '机器学习',
        },
        {
            tagId: '2',
            name: '人工智能',
        },
        {
            tagId: '3',
            name: 'python',
        },
        {
            tagId: '4',
            name: 'pandas',
        },
        {
            tagId: '5',
            name: '强化学习',
        },
        {
            tagId: '6',
            name: '集成学习',
        },
        {
            tagId: '7',
            name: '数据分析',
        },
        {
            tagId: '8',
            name: 'SQL',
        },
        {
            tagId: '9',
            name: '大数据',
        },
        {
            tagId: '10',
            name: '深度学习',
        },
        {
            tagId: '11',
            name: '推荐系统',
        },
    ];

    useBeforeRender(() => {
        console.log('useBeforeRender');
        void getweather();
        void queryLearn();
    });

    const getweather = async (): Promise<any> => {
        const weather = await reqWeather();
        console.log(weather);
    };

    const queryLearn = async (): Promise<any> => {
        const learn = await reqProject();
        console.log(learn);
    };

    /** 项目点击事件 */
    const handleLearnItemClick = (item: AnyObj<any>): any => {
        console.log('click', item);
        navigate(`/project/detail`, {
            state: {
                learnId: '0',
                chapterId: '204',
                detailList: item.detailList,
            },
        });
    };

    return (
        <Layout>
            <Header className="header">
                <Navigator />
            </Header>
            <Layout className="layout-inner">
                <Content className="learn">
                    <div className="ratio">
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            {tagList.map((item, index) => (
                                <Radio.Button value={item.tagId} key={index}>
                                    {item.name}
                                </Radio.Button>
                            ))}
                        </Radio.Group>
                    </div>
                    <div className="project">
                        {projectList.map((item, index) => (
                            <div key={index} onClick={() => handleLearnItemClick(item)} className="project-item">
                                <img src={item.imageUrl} className="project-item-image" alt="" />
                                <div className="project-item-content">
                                    <div className="project-item-content-title">{item.name}</div>
                                    <div className="project-item-content-description">{item.description}</div>
                                    <div className="project-item-content-tag">
                                        {item.tagList.map((tagItem, index) => (
                                            <div key={tagItem.tagId} className="project-item-content-tag-item">
                                                {tagItem.tagName}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Content>
            </Layout>
            <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};
