import React from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        if (this.props.isFetching) {
            return <h1>LOADING</h1>
        }
        return (
            <div>
                {this.props.friends.map((friend, index) => (

                    <div key={index}>
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
    return {
        friends: state.friends,
        isFetching: state.fetchingFriends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsList)