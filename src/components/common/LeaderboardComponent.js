
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LeaderboardComponent = (props) => {

    return (
        <Container className='pt-5 mx-10'>
            <Row className='mb-4'>
                <Col className='mt-5 text-center fw-bold'><h3>League Standings</h3></Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead className='bg-secondary bg-opacity-10'>
                            <tr>
                            {
                                props.data.tableHeader.map((col, index) => 
                                    <th className='fw-medium' key={index} >
                                        { col }
                                    </th>
                                )
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.data.serviceData.map((row, index) =>
                                    <tr key={index} style={{ height: '70px' }} className={ index % 2 === 0 ? 'bg-white' : 'bg-light' }
                                    >
                                        <td>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-6 align-self-start'>
                                                        <img 
                                                        alt={row.awayTeam}
                                                        style={{ width: '53px', height: '37px' }}
                                                        src={props.data.flagUrl + row.awayTeam} />
                                                    </div>
                                                    <div className='col-6 text-start fs-5 fw-bold'>{ row.teamName }</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>{ row.matchesPlayed }</td>
                                        <td className='align-middle'>{ row.goalsFor }</td>
                                        <td className='align-middle'>{ row.goalsAgainst }</td>
                                        <td className='align-middle'>{ row.points }</td>

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

export default LeaderboardComponent