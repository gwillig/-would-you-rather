import React from 'react'
import {Container, Row, Col, Button, Form, Jumbotron, Tabs, Tab} from "react-bootstrap";
import {handleSaveAnswer} from "../redux/actions/Questions";
import {connect} from 'react-redux'

class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        this.handleClick = this.handleClick.bind(this);
        this.choosenAnswer=""
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

    handleClick() {
        /*
        * @description:
        * Show on click the details of a question*/
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    setAnswer(e){
        /*
        * @description:
        * Set the answer to the state on click*/
        //1.Step: Get selected answer
        let choosen_answer_label = e.target.parentElement.querySelector("label").textContent
        console.log(choosen_answer_label)
        //2.Step: set answer to state
        this.setState({choosenAnswer:e.target.value})
    }
    submitForm (e) {
        /*
        * @description */
        //1.Step: choosen answer from state
        e.preventDefault()
        let choosenAnswer = this.state.choosenAnswer
        //2.Step: Save to store
        const dispatch = this.props.dispatch

        dispatch(handleSaveAnswer({
            qid:this.props.question.id,
            authedUser:this.props.authedUser,
            answer: choosenAnswer,
        }))

        this.handleClick()



    }
    render() {


        return (
                <Container>
                    {(() => {
                        if (this.state.isToggleOn) {
                            return(
                                <Row id={this.props.id}style={this.style_card} >
                                    <Col md="5" lg="5" style={this.col_styl}>
                                        <img style={this.avatar_style}
                                            src={this.props.question.avatarURL}
                                             alt="user">

                                        </img>
                                    </Col>
                                    <Col  style={this.col_styl}>
                                        <h4>{this.props.question.user_name} asks:</h4>
                                        <h6>Would you rather {this.props.question.optionOne.text}</h6>
                                        <button onClick={this.handleClick.bind(this)} style={this.viewBtn_style} className="btn btn-primary btn-block" >View Poll</button>

                                    </Col>
                                </Row>
                            )
                        }
                        else if (this.state.isToggleOn===false){
                            return(
                                <Row id={this.props.id}style={this.style_card} >
                                    <Col xs  md="4" lg="4" style={this.col_styl}>
                                        <img style={this.avatar_style}
                                             src={this.props.question.avatarURL}
                                             alt="user">

                                        </img>
                                    </Col>
                                    <Col  style={this.col_styl}>
                                        <div className="align-items-left" >
                                            <Form onSubmit={this.submitForm.bind(this)} style={this.form_style}>
                                                <Form.Group  controlId="formBasicCheckbox">
                                                    <h5>Would you rather...</h5>
                                                    <Form.Check value="optionOne" name="selection" type="radio" label={this.props.question.optionOne.text} onClick={this.setAnswer.bind(this)}/>
                                                    <Form.Check value="optionTwo" name="selection" type="radio" label={this.props.question.optionTwo.text} onClick={this.setAnswer.bind(this)} />
                                                </Form.Group>
                                                <button type="submit" style={this.submitBtn_style} className="btn btn-primary btn-block"
                                                        >Submit</button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }
                    })()}
                </Container>


        )
    }
}

function mapStateToProps ({authedUser, users, questions}) {

    return{
        users:users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionCard);
