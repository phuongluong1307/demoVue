import axios from 'axios';

function callAxios(method, baseUrl, options){
    return axios({
        method: method,
        url: baseUrl,
        headers: options.headers,
        params: options.params,
        data: options.data 
    }).then(res => {
        return res
    }).catch(err => {
        return err
    })
};
export {callAxios};