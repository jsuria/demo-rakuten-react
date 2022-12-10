import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeagueService from '../../services/LeagueService';

import { useEffect, useState } from 'react';

function NaviFooter() {

    const [apiVersion, setApiVersion] = useState('')

    useEffect(() =>{
        const leagueService = new LeagueService()
        leagueService.getAPIVersion().then(response => setApiVersion(response))
    },[])

    return (
        <>
        <Navbar bg="light" fixed='bottom'>
            <Container>
                <Nav className="d-flex justify-content-end">
                    <Nav.Link href="#" className='text-grey fw-normal'>
                        API Version { apiVersion }
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default NaviFooter;