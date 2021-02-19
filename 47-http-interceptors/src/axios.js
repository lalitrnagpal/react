import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.interceptors.request.use(request => { 
    console.log('request via interceptor ');
    console.log(request);
    return request;
}, error => {
    console.log('error caught by interceptor');
    return Promise.reject(error);
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;