
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
                                props.data.standings.map((row, index) =>
                                    <tr key={index} style={{ height: '70px' }} className='bg-white'>
                                        <td className='align-middle'>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-lg-2 col-sm-4 align-self-center'>
                                                        <img 
                                                        loading='lazy'
                                                        alt={row.teamName}
                                                        style={{ width: '53px', height: '37px', objectFit: 'cover' }}
                                                        width="53"
                                                        height="37"
                                                        src={props.data.flagUrl + row.teamName} />
                                                    </div>
                                                    <div className='col-lg-10 col-sm-6 align-self-center text-start fs-10 fw-bold'>{ row.teamName }</div>
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