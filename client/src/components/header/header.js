import React, { useState, useEffect, Component } from 'react';
import { Row, Col ,Icon} from 'antd';

import './header.css';

function Header (){
    return (
        <Row className="header">
            <Icon className="Icon" type="stock" />
            <h1>College Details System</h1>
        </Row>
    );
}

export default Header;
