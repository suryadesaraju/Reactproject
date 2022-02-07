import React ,{Component}from 'react';
import axios from 'axios';

function Service(url){

 const getHistory=()=>{
axios.get(`https://api.spacexdata.com/v3/history`)
.then(res => {
    const history = res.data;
    return history;
})
}


 const getPayload=()=>{
    axios.get(`https://api.spacexdata.com/v3/payloads`)
.then(res => {
    const payloads = res.data;
    return(res.data);
})
}
}

export default Service


