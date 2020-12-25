import {Col, Container, Row} from "react-bootstrap";
import React from "react";


class UserCard extends React.Component{

    style_card={
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border:" 1px solid #19647e",
        borderRadius: "50px",
        padding: "30px",
        margin:"10px"

    }
    avatar_style={
        width:"100px"
    }

    render(){
        return(
            <Container>
            <Row id={this.props.id}style={this.style_card} >
                <Col xs lg="3" style={this.col_styl}>
                    <img style={this.avatar_style} src={this.props.avatarURL} alt={this.props.name}></img>
                </Col>
                <Col style={this.col_styl}>
                    <h4>{this.props.name}</h4>
                    <h5>Answered questions: {this.props.sum_answer}</h5>
                    <h5>Created questions: {this.props.sum_question}</h5>
                    <h3>Score: {this.props.score}</h3>

                </Col>
            </Row>
            </Container>
        )
    }

}

export default UserCard
