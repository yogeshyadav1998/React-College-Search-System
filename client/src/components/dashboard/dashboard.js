import React, { Component} from 'react';

import './dashboard.css';
import Colleges from '../colleges/colleges';
import {Row, Input, Button, Form} from 'antd';


class dashboard extends Component{
    state = {
        searched_Id: null,
    }

    inputChangehandler = input => event =>{
        this.setState({[input]: event.target.value});
    }

    searchHandler = (event) =>{

    }

    render(){
        return(
            <div className="dashboard">
                <Row>
                    Looking For College !!
                </Row>
                <Row className="search_form">
                    <Form>
                        <Input value={this.state.searched_Id} onChange={this.inputChangehandler('searched_Id')} size="large" placeholder="College ID/ Name" />
                        <Button onClick={this.searchHandler} shape="circle" icon="search" />
                    </Form>
                </Row>
                <Row>
                    <Colleges/>
                </Row>
            </div>
        )
    }
}

export default dashboard;