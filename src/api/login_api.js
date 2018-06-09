import axios from 'axios';
import { apiEndpoint } from '../constants';
export function Login(username, password) {
    // return new Promise((resolve, reject) => {
    //     axios.get(`${apiEndpoint}/login`).then(data => resolve(data)).catch(err => reject(err));
    // });
    return new Promise((resolve,reject)=>{
        resolve(true);
    })
}