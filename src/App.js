import logo from './logo.svg';
import './App.css';


import {BrowserRouter, Link, Route} from 'react-router-dom';
import {Row, Col, Tabs, Tab, Jumbotron} from "react-bootstrap";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import New_Question from "./components/New_Question/New_Question";
import Leader_board from "./components/Leader_Board/Leader_board";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {_getUsers} from "./_DATA"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
    //style//
    state=_getUsers()
    app_style = {
        backgroundColor: "#19647e"
    }
    render(){
    return (
        <BrowserRouter >
            <Row style={this.app_style}>
                <Col>
                    <Header></Header>
                </Col>
            </Row>
            <Route  exact path="/" render={props => (

                <Login></Login>
            )}/>
            <Route  path="/home" render={props => (
                <div>

                    <Row style={this.app_style}>
                        <Col style={{paddingRight: " 0px"}}>
                            <Tabs defaultActiveKey={"Home"}>
                                <Tab eventKey="Home" title="Home">
                                    <Home></Home>
                                </Tab>
                                <Tab eventKey="New_Question" title="New Question">
                                    <New_Question></New_Question>
                                </Tab>
                                <Tab eventKey="Leader_Board" title="Leader Board">
                                    <Leader_board></Leader_board>
                                </Tab>
                                <Tab eventKey="logout_user11" title="Logout_user">
                                    <Jumbotron>
                                        <Link to="/">
                                            <button  className="btn btn-primary btn-block">Logout</button>
                                        </Link>
                                    </Jumbotron>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                    <Row noGutters={true} style={this.app_style}>
                        <Footer></Footer>
                    </Row>
                </div>
            )}

            />
        </BrowserRouter>
    );
}
}
export default App;
