import React from 'react'
import {Container, Row, Col, Button, Form} from "react-bootstrap";

import avatar_johndoe from '../image/johndoe.png';


class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        this.handleClick = this.handleClick.bind(this);
        this.answerOptions=["Frontend","Backend"]
    }


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

    viewBtn_style={
        backgroundColor: "#19647e",
        borderColor: "#f0f8ff00",

    }
    col_styl={
        padding:'10px'
    }

    onClick=()=>{
        console.log(this)

    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return (
                <Container>
                    {(() => {
                        if (this.state.isToggleOn) {
                            return(
                                <Row id={this.props.id}style={this.style_card} >
                                    <Col xs lg="3" style={this.col_styl}>
                                        <img style={this.avatar_style} src={avatar_johndoe} alt="user"></img>
                                    </Col>
                                    <Col style={this.col_styl}>
                                        <h4>John Does ask:</h4>
                                        <h5>Would you rather be areact</h5>
                                        <button onClick={this.handleClick.bind(this)} style={this.viewBtn_style} className="btn btn-primary btn-block" >View Poll</button>

                                    </Col>
                                </Row>
                            )
                        }
                        else if (this.state.isToggleOn===false &&this.props.selectedKey==="unanswered_question"){
                            return(
                                <div className="align-items-left" >
                                    <Form.Row className="align-items-center">
                                    <Form.Group  controlId="formBasicCheckbox">
                                        <Form.Check  name="selection" type="radio" label="Check me out" />
                                        <Form.Check name="selection" type="radio" label="Check me out" />
                                    </Form.Group>
                                    </Form.Row>
                                    <Button style={this.viewBtn_style} onClick={this.handleClick.bind(this)} >
                                        Submit
                                    </Button>
                                </div>
                            )
                        }
                        else if (this.state.isToggleOn===false &&this.props.selectedKey!=="unanswered_question"){
                            return(
                                <div className="align-items-left" >
                                        <ul style={{textAlign: "left"}}>
                                            <li>Would you rather find $50 yourself?:<span>2 out of 3</span></li>
                                            <li>Would you rather have your best friend find $500?<span>1 out of 3</span></li>
                                        </ul>

                                    <Button  style={this.viewBtn_style}onClick={this.handleClick.bind(this)} >
                                        Return
                                    </Button>
                                </div>
                            )
                        }
                    })()}

                </Container>

        )
    }
}

export default QuestionCard
