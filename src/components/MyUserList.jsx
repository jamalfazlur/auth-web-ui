import React, { Component } from 'react';
import axios from 'axios';

class MyUserList extends Component {
    state = { userList : [] }
    
    componentDidMount(){
        const token = localStorage.getItem('token');
        const headers = {
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        }
        axios.get(`http://localhost:1991/admin/getuserlist`, headers)
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log("Gagal");
                console.log(err);
            })
    }
    renderUserList = () => {
        var listJSX = this.state.userList.map((item) => {
            return(
                <div className="">
                    <div className="alert alert-success"><h4>Username: {item.username}</h4></div>
                    <h4>Email: {item.email} </h4>
                    <h4>Role: {item.role} </h4>
                    <h4>Status: {item.status} </h4>
                    <h4>Last Login: {item.lastlogin.toString()} </h4>
                </div>
            );
        })
    }
    render(){
        return (
            <div>

            </div>
        );
    }
}

export default MyUserList;