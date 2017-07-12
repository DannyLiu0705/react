import React from 'react';
import {Link} from 'react-router';
require('styles/Footer.css');
class Footer extends React.Component {
    constructor(){
        super();
        this.data = [
            {
                icon : 'iconfont icon-financing',
                name : '理财',
                to : '/'
            },
            {
                icon : 'iconfont icon-find',
                name : '发现',
                to : 'find'
            },
            {
                icon : 'iconfont icon-me',
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
                            <i className={item.icon}></i>
                            <p>{item.name}</p>
                        </Link>
                    )
                }
            </footer>
        )
    }
}

module.exports = Footer;