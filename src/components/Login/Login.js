import React from 'react'
import {Jumbotron,Container,Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {setAuthedUser} from "../../components/redux/actions/authUser"

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
        //Set user to state and redirects to homepage
        e.preventDefault()
        //1.Step: Get value of selected user from form
        let selected_user = e.target.querySelector("select").value
        //2.Step: Save to store
        const { dispatch} = this.props
        dispatch(setAuthedUser(selected_user))

        this.props.history.push('/home'); // <--- The page you want to redirect your user to.


    }

    render() {

        let users = this.props.users
        let users_array=Object.entries(users).map(el=>el[1])

        return (
            <Jumbotron className="d-flex align-items-center min-vh-50">
             <Container style={{maxWidth:"600px"}} className="text-center  max-w-1">
                 <Form onSubmit={this.submitForm.bind(this)} style={this.form_style}>
                     <h3 style={this.title_style}>Sign In</h3>
                     <Form.Group controlId="exampleForm.SelectCustom">
                         <Form.Control as="select" custom>
                             {
                                 users_array.map(el=><option key={el.id} value={el.id}>{el.name}</option>)
                             }

                         </Form.Control>
                     </Form.Group>
                     <button type="submit" style={this.submitBtn_style} className="btn btn-primary btn-block">Submit</button>
                 </Form>
             </Container>
            </Jumbotron>

        )
    }
}

function mapStatetoProps({users}){
    return{
        users:users
    }
}

export default connect(mapStatetoProps)(withRouter(Login))
