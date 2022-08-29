import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DEV_BACKEND_URL = 'http://localhost:8081';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PROD_BACKEND_URL = 'https://linklearner.com';

export const DATAWHALE_HOMEPAGE_URL = 'https://datawhale.club';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DEV_BASE_URL = 'http://localhost:8080/';
const PROD_BASE_URL = 'https://linklearner.com';

// export const AXIOS_BASE_URL = process.env.NODE_ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL;
export const AXIOS_BASE_URL = PROD_BASE_URL;
axios.defaults.baseURL = AXIOS_BASE_URL;

export const http = axios;
