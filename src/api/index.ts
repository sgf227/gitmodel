import { message } from 'antd';
import { AnyObj, Callback } from 'common/type';
import jsonp from 'jsonp';
// import { ajax } from './ajax';

// const BASE = 'http://localhost:5000'
// const BASE = '';
// 登陆
// export const reqLogin = (username: any, password: any) => ajax(BASE + '/login', { username, password }, 'POST');

/** 获取天气 */
export const reqWeather = (): any => {
    return new Promise((resolve, reject) => {
        const url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=440100&key=7324682973e78a6552854705ef7cdd5b';
        jsonp(url, {}, (err: any, data: { status: string; lives: Array<{ weather: any }> }) => {
            // 请求成功
            // eslint-disable-next-line no-extra-boolean-cast
            if (!Boolean(err) && data.status === '1') {
                const weather = data.lives[0].weather;
                resolve(weather);
            }
            // 请求失败
            else {
                void message.error('获取天气信息失败！');
            }
        });
    });
};

/** 获取项目  */
export const reqProject = (): any => {
    return new Promise((resolve, reject) => {
        const url = 'https://linklearner.com/api/learn';
        // const url = 'https://linklearner.com/api/learn/detail?learnId=20&chapterId=62';
        jsonp(url, (err: any, data: AnyObj<AnyObj<string> | string | []>) => {
            // 请求成功
            // eslint-disable-next-line no-extra-boolean-cast
            if (!Boolean(err) && data.status === '1') {
                resolve(data);
            }
            // 请求失败
            else {
                reject(err);
            }
        });
    });
};

/** 使用script来解决跨域 */
export const sgfQuery = (options: { data: { [x: string]: string }; success: Callback; url: string }): any => {
    // 创建标签
    const script = document.createElement('script');

    // 拼接字符串
    let params = '';
    for (const key in options.data) {
        params += '&' + key + '=' + options.data[key];
    }

    // 创建随机函数，toString将数字转换字符串去除小数点.
    const fnName: string = 'myFn' + Math.random().toString().replace('.', '');
    // fnName不是全局函数，利用window将其变成函数
    (window as { [key: string]: any })[fnName] = options.success;

    script.src = options.url + '?callback=' + fnName + params;
    document.body.appendChild(script);

    // 为script标签添加onload事件
    script.onload = function () {
        // 删除掉script标签
        document.body.removeChild(script);
    };
};
