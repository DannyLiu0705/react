import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
    constructor(){
        super();
        data:[
            {
                img_url : '',
                name : '首页'
            },
            {
                img_url : '',
                name : '发现'
            },
            {
                img_url : '',
                name : '我的'
            }
        ]
    }
    render() {
        return(
            <footer>
                {
                    this.data.map((item, index)=>
                        <Link>
                            <img src={item.img_url} alt={item.name}/>
                            <p>{item.name}</p>
                        </Link>
                    )
                }
            </footer>
        )
    }
}