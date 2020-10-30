import React from 'react'
import {Jumbotron } from "react-bootstrap";

class Leader_board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  user:[{name:"gustav"},{name:"tom"},{name:"hans"}]}
    }
    render() {
        return (
            <Jumbotron>
                {this.state.user.map((user)=>{return <h1>{user.name}</h1>})}


            </Jumbotron>
        )
    }
}

export default Leader_board
