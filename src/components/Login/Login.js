import React from 'react'
import { useHistory } from "react-router-dom";
import {Jumbotron, Col, Card,Button,Container,Row, Form,Dropdown } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
class Login extends React.Component {
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
        e.preventDefault()
        this.props.history.push('/home'); // <--- The page you want to redirect your user to.
    }

    render() {
        return (
            <Jumbotron className="d-flex align-items-center min-vh-50">
             <Container style={{maxWidth:"600px"}} className="text-center  max-w-1">
                 <Form onSubmit={this.submitForm.bind(this)} style={this.form_style}>
                     <h3 style={this.title_style}>Sign In</h3>
                     <Form.Group controlId="exampleForm.SelectCustom">
                         <Form.Control as="select" custom>
                             <option>Select User</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                         </Form.Control>
                     </Form.Group>
                     <button type="submit" style={this.submitBtn_style} className="btn btn-primary btn-block">Submit</button>
                 </Form>
             </Container>
            </Jumbotron>

        )
    }
}

export default withRouter(Login)
