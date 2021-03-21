import React, { Component } from 'react';

import './dashboard.css';
import {Row, Input, Button} from 'antd';


class dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <Row>
                    Looking For College !!
                </Row>
                <Row className="search_form">
                    <Input size="large" placeholder="College ID/ Name" />
                    <Button shape="circle" icon="search" />
                </Row>
            </div>
        )
    }
}

export default dashboard;