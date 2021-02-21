import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://poetic-fact-280908-default-rtdb.firebaseio.com/'
})

instance.interceptors.request.use(request => { 
    console.log('request via interceptor ');
    console.log(request);
    return request;
}, error => {
    console.log('error caught by interceptor');
    return Promise.reject(error);
});


export default instance;