
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ScheduleComponent = (props) => {

    const colBreakpointClass = (idx) => {
        if(idx === 0) return 'fw-medium d-none d-sm-table-cell'
        if(idx === 1) return 'fw-medium d-none d-lg-table-cell'
    }

    return (
        <Container className='mt-lg-5 mt-sm-2 mx-md-10 mx-sm-auto'>
            <Row className='mb-4'>
                <Col className='mt-5 text-center fw-bold'><h3>League Schedule</h3></Col>
            </Row>
            <Row>
                <Col sm={12} lg={12}>
                    <Table>
                        <thead className='bg-secondary bg-opacity-10'>
                            <tr>
                            {
                                props.data.tableHeader.map((col, index) => 
                                    <th className={ colBreakpointClass(index) } key={index} >
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
                                        <td className='d-none d-sm-table-cell align-middle'>
                                            <span className='fs-10 text-start'>{ new Date(row.matchDate).toUTCString() }</span>
                                        </td>
                                        <td className='d-none d-lg-table-cell align-middle'>
                                            <span className='fs-10 text-start'>{ row.stadium }</span>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-6 align-self-center text-end fw-bold fs-10'>
                                                        { row.homeTeam }
                                                    </div>
                                                    <div className='col-4 align-self-center'>
                                                        <img 
                                                            loading='lazy'
                                                            width="53"
                                                            height="37"
                                                            alt={row.homeTeam}
                                                            style={{ width: '53px', height: '37px', objectFit: 'cover' }}
                                                            src={props.data.flagUrl + row.homeTeam} />
                                                    </div>
                                                    <div className='col-2 align-self-center text-start fw-bold fs-10'>
                                                        { row.homeTeamScore }
                                                    </div>
                                                </div>  
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-2 align-self-center text-start fw-bold fs-10'>
                                                        { row.awayTeamScore }
                                                    </div>
                                                    <div className='col-4 align-self-center'>
                                                        <img 
                                                        loading='lazy'
                                                        width="53"
                                                        height="37"
                                                        style={{ width: '53px', height: '37px', objectFit: 'cover' }}
                                                        alt={row.awayTeam}
                                                        src={props.data.flagUrl + row.awayTeam} />
                                                    </div>
                                                    <div className='col-6 align-self-center text-start fs-10 fw-bold'>{ row.awayTeam }</div>
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