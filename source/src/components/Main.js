require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  Link
} from 'react-router';

let logo = require('../images/logo.png');
let Footer = require('./Footer');
class Header extends React.Component {
  render(){
    return(
      <header className="head">
        <nav>
          <ul className="clearfix">
            <li className="left">
              您好，欢迎!
            </li>
            <li className="right">
              <span>客服热线：400-820-8820（工作日 9:00~18:00）</span>
            </li>
            <li className="right">
              <Link to="">注册</Link>
            </li>
            <li className="right">
              <a>登录</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			tab: [
				{name: '首页', link: 'home'},
				{name: '精选平台', link: 'about'},
				{name: '关于我们', link: 'about'},
				{name: '个人中心', link: 'user'}
			],
			current: 0
		}
	}
	tabChange(index) {
		this.setState({
			current: index
		});
	}
	render() {
		return (
      <nav className="common-width common-nav">
        <div className="left">
          <Link to="/">
            <img src={logo}/>
          </Link>
          <span>天天都拿高收益!</span>
        </div>
        <div className="right">
          <ul className="ul-ver">
            {
              this.state.tab.map((val, index) => {
                return (
                  <li className={this.state.current === index ? 'active' : ''} key={index} onClick={this.tabChange.bind(this,index)}><Link to={val.link}>{val.name}</Link></li>
                )
              })
            }
          </ul>
        </div>
      </nav>
		)
	}
}

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        {/*<Header />*/}
        {/*<Nav />*/}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
