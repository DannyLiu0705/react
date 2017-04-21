import React from 'react';
import HttpUtils from './HttpUtils';
class Common extends React.Component{
    
    static getToken(callback){
        let token = sessionStorage.getItem('token');
        if(token){
            if(parseInt(sessionStorage.getItem('expires_in')) > new Date().getTime()){
                return token;
            }
            return this.getAccessToken(callback);
        }
        return this.getAccessToken(callback);
    }

    static getAccessToken(callback){
        let client_id = '30_5o9osezu0fswwoosg88ks0ggcco0kcckso4c4004kw8sskk8o0';
        let secret = '55jshpwa7ackw40wcoos84wkg8wocc04og4ksw4ossw0wk8koo';
        let url = 'https://authorize.amoydao.com/oauth/v2/token?grant_type=client_credentials&client_id='+client_id+'&client_secret='+secret;
        let token =  HttpUtils.get(url, '', (token_info)=>{
            sessionStorage.setItem('token', token_info.data.access_token);
            sessionStorage.setItem('expires_in', parseInt(token_info.data.expires_in) + new Date().getTime());
            return callback(token_info.data.access_token);
        });
    }
}

module.exports = Common;