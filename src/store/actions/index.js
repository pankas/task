import axios from 'axios';
import config from '../../config';

export const login = (loginData,next)=>async (dispatch)=>{
    const response = await axios.post(config.login,loginData);
    const loginResponse = response.data;
    localStorage.setItem('username',loginResponse.username);
    sessionStorage.setItem('isAuthenticated',true)
    dispatch({type:'LOGIN',payload:loginResponse})
    next()
}

export const signup = (signupData,next)=> async (dispatch)=>{
    console.log("sign up",config.signup)
    const response = await axios.post(config.signup,signupData);
    const signupResponse = response.data;
    dispatch({type:'SIGNUP',payload: signupResponse});
    next()
}

export const forgotPass = (email,next)=> async (dispatch)=>{
    const response = await axios.post(config.forgotPass,email);
    const fgRes = response.data;
    dispatch({type:'FORGOT_PASS',payload: fgRes})
    next()
}

export const update = (val,next)=>async (dispatch)=>{
   const response =  await axios.post(config.update,val)
   const data = response.data
   dispatch({type:'UPDATE',payload:data})
   next();
}

export const getUsers = (next)=>async (dispatch)=>{
    const response =  await axios.get(config.getUsers)
    const data = response.data
    dispatch({type:'GET_USERS',payload:data})
    next();
 }

export const sendMail = (to,next)=>async (dispatch)=>{
   const response =  await axios.post(config.sendMail,to)
   const data = response.data
   console.log("send mail response",data)
   dispatch({type:'SEND_MAIL',payload:data})
   next();
}