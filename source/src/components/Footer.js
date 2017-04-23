import React from 'react';
import {Link} from 'react-router';
require('styles/Footer.css');
class Footer extends React.Component {
    constructor(){
        super();
        this.data = [
            {
                img_url : '',
                name : '首页',
                to : '/'
            },
            {
                img_url : '',
                name : '发现',
                to : 'find'
            },
            {
                img_url : '',
                name : '我的',
                to : 'me'
            }
        ]
        this.state = {
            current : 0
        }
    }
    _tabChange(index){
        if(this.state.current === index)
            return
        this.setState({
            current : index
        })
    }
    render() {
        return(
            <footer>
                {
                    this.data.map((item, index)=>
                        <Link key={index} to={item.to} onClick={this._tabChange.bind(this, index)} className={this.state.current === index ? 'active' : ''}>
                            <p>{item.name}</p>
                        </Link>
                    )
                }
            </footer>
        )
    }
}

module.exports = Footer;