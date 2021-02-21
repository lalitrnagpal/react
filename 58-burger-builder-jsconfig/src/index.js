import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => { 
     console.log('request via interceptor ');
     console.log(request);
     return request;
}, error => {
     console.log('error caught by interceptor');
     return Promise.reject(error);
});

const app = (
     <BrowserRouter>
          <App></App>
     </BrowserRouter>
)

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
