import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {login} from '../actions/actions';

class Login extends React.Component{
    state={ 
        credentials:{
            username: '',
            password: '',
    }
    }
    handleChange = e => {this.setState({
        credentials:{...this.state.credentials, [e.target.name]:e.target.value}
    })}
    login= i =>{
        i.preventDefault();
        console.log('Look at me!');
        this.props.login(this.state.credentials).then(()=>{this.props.history.push('/friends');})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                <input type="string" name="username" value={this.state.credentials.username}
                        placeholder="Enter Username" onChange={this.handleChange} />
                <button>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    loading: state.loading,
    error: state.error
})


export default withRouter(connect(
    mapStateToProps,
    {
     login,   
    }

)(Login));