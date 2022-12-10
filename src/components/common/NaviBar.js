import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NaviBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src='/Images/logo.svg'
             
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="/schedule" className='text-white fw-bold'>
              <img
                className='mx-2'
                alt='Schedule Icon' 
                height='25'
                width='25'
                src='/Images/schedule.png' />
              Schedule
            </Nav.Link>
            <Nav.Link href="/leaderboard" className='text-white fw-bold'>
              <img 
                className='mx-2'
                alt='Leaderboard Icon'
                height='25'
                width='25'
                src='/Images/leaderboard.png' />
              Leaderboard
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NaviBar;