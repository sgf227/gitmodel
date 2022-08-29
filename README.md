# gitmodel 网站

## 一、技术选型

-   编程语言：typescript
-   前端框架：react
-   前端组件库：antd
-   markdown-to-html 解析库：markdown-it
-   部署方式：deploy

## 二、目录结构

| 文件目录       | 说明               |
| -------------- | ------------------ |
| ./README.md    | 说明文档           |
| ./src          | 源代码             |
| .github        | 自动部署 action    |
| ./build        | 构建后代码         |
| ./stylelintrc  | 规范样式文件       |
| .eslintrc.json | 规范 ts,tsx 等文件 |
| ./build        | 构建后代码         |

## 三、开发指南

执行`git clone git@github.com:sgf227/sgf-react-datawhale.git` 命令把代码下载下来
使用`npm install` 或 `yarn`命令安装依赖,暂时只能用
使用`npm start`或`yarn start`命令把项目跑起来，访问`http://localhost:3000/sgf-react-datawhale`即可看到网站
使用`npm build`命令进行打包

## 四、部署指南

执行`npm run deploy`命令手动部署项目
使用`git push`提交到 main 分支会自动部署项目（可通过修改.github/woekflows/ci.yaml 文件内容修改触发自动部署项目的方式）

## 五、后续 todo

-   文案、视频、评论、提问、答疑、加入我们、捐赠、意见反馈等等、直播等等
