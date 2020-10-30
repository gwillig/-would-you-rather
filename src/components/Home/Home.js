import React from 'react'
import {Jumbotron, Tab, Tabs, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import QuestionCard from './QuestionCard'
import SurveyCard from "./SurveyCard";
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  selectedKey:"unanswered_question"}
    }

    tab_style={
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border:" 2px solid #19647e",


    }

    handleSelect = (key) => {
        /*
        * @description:
        * Set the current selected tab
        * */
        this.setState({ selectedKey:key })

    }

    render() {
        return (
            <Jumbotron className="d-flex align-items-center min-vh-50">
                <Container style={{maxWidth:"600px"}} className="text-center  max-w-1">
                    <div style={this.tab_style}>
                        <Tabs  defaultActiveKey={"unanswered_question"}  onSelect={this.handleSelect} >
                            <Tab  eventKey="unanswered_question" title="Unanswered Question">
                                <QuestionCard selectedKey={this.state.selectedKey} id={"Card"}></QuestionCard>
                            </Tab>
                            <Tab eventKey="answered_question" title="Answered Question">
                                <QuestionCard selectedKey={this.state.selectedKey} id={"Card"}></QuestionCard>
                            </Tab>
                        </Tabs>
                    </div>

                </Container>
            </Jumbotron>

        )
    }
}

export default Home
