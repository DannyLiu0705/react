import React from 'react';
import axios from 'axios';
class HttpUtils extends React.Component{
    static get(url, params, callback){
        if(params){
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key+'='+params[key]));
            if(url.search(/\?/) === -1){
                url += '?' + paramsArray.join('&');
            }else{
                url += '&' + paramsArray.join('&');
            }
        }
        axios.get(url)
        .then((response) => {
            
            if(response.status == 200){
                
                callback(response);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    static post(url, headers, params, callback){
        fetch(url,{
            method: 'POST',
            headers: {
                'token': headers
            },
            body:JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            callback(responseJson)
        }).done();
    }
}

module.exports = HttpUtils;