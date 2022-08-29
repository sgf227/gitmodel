import axios from 'axios';
import { message } from 'antd';

export const ajax = async (url: string, data = {}, type = 'GET'): Promise<any> => {
    return await new Promise((resolve, reject) => {
        let promise;
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data,
            });
        } else {
            promise = axios.post(url, data);
        }

        promise
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
                void message.error(error.message);
            });
    });
};

// 请求登陆接口
// ajax('/login', {username: 'Tom', passsword: '12345'}, 'POST').then()
// 添加用户
// ajax('/manage/user/add', {username: 'Tom', passsword: '12345', phone: '13712341234'}, 'POST').then()
