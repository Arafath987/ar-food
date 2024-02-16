import axios from 'axios';


export const apiHandler = axios.create({
  baseURL: 'http://127.0.0.1:8000', 
  headers: {
    'Content-Type': 'application/json',
    Accept:"application/json"
  },
  withCredentials:true

});


apiHandler.interceptors.request.use(req=>{
    console.log(req,"REWUEST")
    return req;
})

apiHandler.defaults.withCredentials = true