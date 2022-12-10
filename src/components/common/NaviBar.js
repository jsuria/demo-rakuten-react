import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LeagueLogo from '../../assets/logo.svg'

function NaviBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={LeagueLogo}
             
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NaviBar;