import React, { Component} from 'react';

import './dashboard.css';
import {connect} from 'react-redux';
import Colleges from '../colleges/colleges';
import {Row, Input, Button, Form} from 'antd';

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
            <div className="dashboard">
                <Row>
                    Looking For College !!
                </Row>
                <Row className="search_form">
                    <Form>
                        <Input value={this.state.searched_col} onChange={this.inputChangehandler('searched_col')} size="large" placeholder="College ID/ Name" />
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

const mapStateToProps = state => ({
    colleges: state.all_colleges
  });

export default connect(mapStateToProps,null)(dashboard);