import React from 'react'
import {Jumbotron } from "react-bootstrap";
import UserCard from "./UserCard";

class Leader_board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:[
                {name:"gustav",sum_question:3,sum_answer:3,score:6},
                {name:"hans",sum_question:3,sum_answer:3,score:6},
                {name:"tom",sum_question:3,sum_answer:3,score:6}
                ]
        }
    }
    render() {
        return (
            <Jumbotron>
                {this.state.user.map((user)=>{return (
                    <UserCard
                        user_name={user.name}
                        sum_question={user.sum_question}
                        sum_answer={user.sum_answer}
                        score={user.score}
                    >

                    </UserCard>

                )})}
            </Jumbotron>
        )
    }
}

export default Leader_board
