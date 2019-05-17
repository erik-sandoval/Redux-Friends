import React from 'react'
import { connect } from 'react-redux'
import { friendsList } from '../actions'

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.friendsList()
    }
    render() {
        console.log(this.props)
        if (this.props.isFetching) {
            return <h1>LOADING</h1>
        }
        return (
            <div>
                {this.props.friends.map(friend => (

                    <div key={friend.id}>
                        <h2>Name: {friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Contact: {friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        friends: state.friends,
        isFetching: state.fetchingFriends
    }
}

export default connect(mapStateToProps, { friendsList })(FriendsList)