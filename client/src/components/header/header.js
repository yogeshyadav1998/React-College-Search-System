import React, { useState, useEffect, Component } from 'react';
import { Row, Col ,Icon} from 'antd';

import './header.css';

function Header (){
    return (
        <div className="header">
            <Row className="header_container">
                <Col offset="12">
                    <Icon type="stock" style={{padding:"0 10px"}} />
                    <p className="app_title">
                        College Details System
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
