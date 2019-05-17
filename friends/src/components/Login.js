import React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/index'



class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state).then(() => {
            this.props.history.push('/friends')
        })
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.login}>
                username: <input
                    onChange={this.handleChange}
                    name='username'
                    value={this.state.username}
                ></input>
                password: <input
                    onChange={this.handleChange}
                    name='password'
                    value={this.state.password}
                ></input>
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isLoggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { login })(Login)
