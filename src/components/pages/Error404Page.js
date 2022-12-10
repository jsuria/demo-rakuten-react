import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Error404Page extends React.Component {
    render = () => {
        return (
            <Container className='pt-5 mx-10'>
                <Row className='mb-5'>
                    <Col className='text-center'>
                        <img
                            alt='Page not found' 
                            src='/Images/404.png' />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Error404Page