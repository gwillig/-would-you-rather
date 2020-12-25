import React from 'react'
import {Jumbotron } from "react-bootstrap";
import UserCard from "./UserCard";
import {connect} from 'react-redux'


class LeaderBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <Jumbotron>
                {this.props.users.map((user)=>{
                    return (
                        <UserCard
                            key={user.id}
                            user_name={user.name}
                            sum_question={user["amountQuestion"]}
                            sum_answer={ user["amountAnswer"]}
                            score={user["score"]}
                            avatarURL ={user["avatarURL"]}
                        >

                        </UserCard>
                    )
                })}
            </Jumbotron>
        )
    }
}

function mapStatetoProps({users}){
    //1.Step Convert array of object to array of array
    let usersArray = Object.values(users)
    //2.Step Calculate the score for each user

    usersArray.map(user=>{
        user["amountQuestion"] = Object.keys(user.questions).length
        user["amountAnswer"] = Object.keys(user.answers).length
        user["score"] = user["amountAnswer"] + user["amountQuestion"]
        return user
    })
    console.log(users)
    return {users:usersArray}
}
export default connect(mapStatetoProps)(LeaderBoard)
