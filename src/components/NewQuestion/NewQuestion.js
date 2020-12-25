import React from 'react'
import { withRouter } from 'react-router-dom';
import {Container, Form, Jumbotron} from "react-bootstrap";
import {connect} from "react-redux";
import {handleAddQuestion} from "../redux/actions/Questions";

class NewQuestion extends React.Component {
    title_style = {
        color:"#19647e",
        fontSize:"30px"
    }
    form_style={
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border:" 2px solid #19647e",
        borderRadius: "50px",
        padding: "30px",

    }
    submitBtn_style={
        backgroundColor: "#19647e",
        borderColor: "#f0f8ff00"
    }
    submitForm (e) {
        /*
        * @description */
        //1.Step: Get the values
        e.preventDefault()
        let option_one = e.target.querySelector("#optonone").value
        let option_two = e.target.querySelector("#optontwo").value
        //2.Step: Save to store

        const { dispatch} = this.props
        dispatch(handleAddQuestion(
            option_one,
            option_two
        ))
        // dispatch(setAuthedUser(selected_user))
        this.props.handleSelect("Home")

    }
    render() {
        return (
            <Jumbotron className="d-flex align-items-center min-vh-50">
                <Container style={{maxWidth:"600px"}} className="text-center  max-w-1">
                    <Form onSubmit={this.submitForm.bind(this)} style={this.form_style}>
                        <h3 style={this.title_style}>Create New Question</h3>
                        <Form.Group>
                            <Form.Label>Would you rather...</Form.Label>
                            <Form.Control  id="optonone" placeholder="Enter Option One" />
                            <Form.Label>OR</Form.Label>
                            <Form.Control id="optontwo"  placeholder="Enter Option Two" />
                        </Form.Group>

                        <button type="submit" style={this.submitBtn_style} className="btn btn-primary btn-block">Submit</button>
                    </Form>
                </Container>
            </Jumbotron>
        )
    }
}



function mapStatetoProps({users,authedUser}){
    return{
        users:users,
        authedUser
    }
}

export default connect(mapStatetoProps)(withRouter(NewQuestion))
