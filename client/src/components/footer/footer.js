import React, { Component } from 'react';
import {Row,Col,Icon} from 'antd';

import './footer.css'

class footer extends Component{
    render(){
        return(
            <div className="footer">
                <Row>
                    <p>
                        Thanks For Visiting
                    </p>
                </Row>
            </div>
        )
    }
}

export default footer;