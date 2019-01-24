import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';

class MyLogin extends Component{
    renderError = () => {
        if(this.props.error.length > 0){
            return <Alert color="danger">{this.props.error}</Alert>
        }
    }

    renderButton = () => {
        if(this.props.loading){
            return <center><div className="loader"></div></center>
        }
        return <button type="button" className="btn btn-primary" style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Login</button>
    }

    render(){
        if(this.props.username === ""){
            return(
                
                <div className="container">
                    <div className="row justify-content-sm-center ml-auto mr-auto">
                        
                        <form  ref="formLogin">
                            <fieldset>
                                <legend>Login!</legend>
                                <hr />
                                <div className="alert alert-warning">
                                    <p><i>It's Nice to see you <b>come back</b>!</i></p>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Username</label>
                                    <div className="col-sm-8">
                                    <input type="text" ref="username" className="form-control" id="inputUsername" placeholder="Username" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Password</label>
                                    <div className="col-sm-8">
                                    <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" onKeyPress={this.renderOnKeyPress} required />
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <div className="col-12">
                                        {this.renderButton()}
                                    </div>
                                        
                                </div>
                                {this.renderError()}
                                <div className="btn my-auto"><p>Don't have Account? <Link to="/register" className="border-bottom">Register</Link></p></div>
                            </fieldset>
                        </form>
                        
                    </div>                
                </div>
                
            );
        }
        return <Redirect to="/" />
    }
}

const mapStateToProps = (state) => {
    return { 
        username: state.auth.username, 
        error: state.auth.error, 
        loading: state.auth.loading 
    };
}

export default connect(mapStateToProps)(MyLogin);