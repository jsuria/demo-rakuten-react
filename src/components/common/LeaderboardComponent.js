
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ScheduleComponent = (props) => {

    return (
        <Container className='pt-5 mx-10'>
            <Row className='mb-5'>
                <Col className='text-center'><h4>League Schedule</h4></Col>
            </Row>
            <Row>
                <Col>
                    <Table striped>
                        <thead>
                            <tr>
                            {
                                props.data.tableHeader.map((col, index) => 
                                    <th key={index} >
                                        { col }
                                    </th>
                                )
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.data.serviceData.map((row, index) =>
                                    <tr key={index}>
                                        <td>{ new Date(row.matchDate).toUTCString() }</td>
                                        <td>{ row.stadium }</td>
                                        <td>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col text-end'>
                                                        { row.homeTeam }
                                                    </div>
                                                    <div className='col'>
                                                        <img 
                                                            alt={row.homeTeam}
                                                            style={{ width: '53px', height: '37px' }}
                                                            src={props.data.flagUrl + row.homeTeam} />
                                                    </div>
                                                </div>  
                                            </div>
                                        </td>
                                        <td>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <img 
                                                        alt={row.awayTeam}
                                                        style={{ width: '53px', height: '37px' }}
                                                        src={props.data.flagUrl + row.awayTeam} />
                                                    </div>
                                                    <div className='col text-start'>{ row.awayTeam }</div>
                                                </div>
                                            </div>
                                            
                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ScheduleComponent