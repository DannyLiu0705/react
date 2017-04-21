import React from 'react';
import { Carousel } from 'antd';
import HttpUtils from './HttpUtils';
import Common from './Common';
import axios from 'axios';
const APIURL = 'https://napi.amoydao.com';
class Banner extends React.Component {
    render(){
        console.log(this.props.banner)
        if(!this.props.banner){
            return(
                <div></div>
            )
        }
        return(
            <Carousel autoplay>
                {
                    this.props.banner.map((item, index)=>
                        <img src={item.image_url} key={index}/>
                    )
                }
            </Carousel>
        )
    }
}
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {}
        };
        
    }
    componentDidMount() {
        let _self = this;
        let token = Common.getToken((token)=>{
            HttpUtils.get(APIURL+'/2/index?access_token='+token, '', (data)=>{
                if(data.data.code ==200){
                    _self.setState({
                        data : data.data.data
                    })
                }
            });
        });
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <Banner banner={this.state.data.banner}/>
            </div>
        )
    }
}
module.exports = Home;