import React from 'react'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <form>
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

export default Login
