import React, { useState, useEffect, Component } from 'react';
import { Row, Col } from 'antd';

import './header.css';

function Header (){
    return (
        <div className="header">
            <Row>
                <p>
                    College Details
                </p>
            </Row>
        </div>
    );
}

export default Header;
