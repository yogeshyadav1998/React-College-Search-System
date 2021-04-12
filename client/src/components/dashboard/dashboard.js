import React, { Component} from 'react';

import './dashboard.css';
import {connect} from 'react-redux';
import Colleges from '../colleges/colleges';
import {Row, Col, Button, Form} from 'antd';

class dashboard extends Component{
    state = {
        searched_col: null,
    }

    inputChangehandler = input => event =>{
        this.setState({[input]: event.target.value});
    }

    searchHandler = (event) =>{
        const colleges = this.props.colleges;
        const searched = colleges.filter((college)=>{
            return (
                college.name.includes(this.state.searched_col) ||
                college.id.includes(this.state.searched_col)
            );
        })
        console.log(searched)
    }

    render(){
        return(
            <Row className="dashboard">
                <Col className="graph-section" >
                    <img src="./images/graph.png"/>
                </Col>
                <Col className="search-section">
                    <h1>Search College</h1>
                    <Form className="search-form">
                        <input  value={this.state.searched_col} onChange={this.inputChangehandler('searched_col')} size="large" placeholder="College ID/ Name" />
                        <Button className="search-button" onClick={this.searchHandler} shape="circle" icon="search" />
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    colleges: state.all_colleges
  });

export default connect(mapStateToProps,null)(dashboard);