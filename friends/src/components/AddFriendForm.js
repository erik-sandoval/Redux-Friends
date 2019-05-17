import React from 'react'
import { connect } from 'react-redux'

import { addFriend } from '../actions'

class AddFriendForm extends React.Component {

    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend(this.state).then(() => {
            this.props.history.push('/friends')
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    Name: <input
                        name='name'
                        onChange={this.handleChange}
                        value={this.state.name}
                    ></input>
                    Age: <input
                        name='age'
                        onChange={this.handleChange}
                        value={this.state.age}
                    ></input>
                    Email: <input
                        name='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                    ></input>
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps, { addFriend })(AddFriendForm)