import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideComponent from '../Shared/LeftSideComponent/LeftSideComponent';
import RightSideComponent from '../Shared/RightSideComponent/RightSideComponent';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideComponent></LeftSideComponent>
                    </Col>
                    <Col lg="7"> <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideComponent></RightSideComponent>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;