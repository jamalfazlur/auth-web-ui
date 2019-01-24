import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { onUserVerified } from '../actions';

class MyHasVerified extends Component{
    state = { verified: false, loading: true }

    componentDidMount() {
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        var username = params.username;
        var password = params.password;

        axios.post(`http://localhost:1991/auth/verified`, {
            username,
            password
        }).then((res) => {
            const { token } = res.data;
            localStorage.setItem("token", token || "");
            this.props.onUserVerified(res.data);
            console.log(res.data);
            this.setState({loading: false, verified: true})
        }).catch((err) => {
            console.log(err)
        })
    }

    renderContent = () =>{
        if(this.state.verified && !this.state.loading){
            return(
                <div className="alert alert-success">
                    <h2>Congrats</h2> 
                    <p>You're Verified!</p>
                </div>
            )
        } else if(!this.state.verified && !this.loading) {
            return(
                <div className="alert alert-warning">
                    <h2>Sorry, It Sucks</h2>
                    <center><div className="loader"></div></center> 
                    <p>Try to reload this page</p>
                </div>
            );
        } return (
            <div className="alert alert-warning">
                <h2>Please Wait . .</h2>
            </div>
        );
    }
    render(){
        return(
            <div className="alert">
                {this.renderContent()}
            </div>
        );
    }
}

export default connect(null, {onUserVerified})(MyHasVerified);