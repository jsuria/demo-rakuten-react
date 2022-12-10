import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LeagueService from '../../services/LeagueService';
import { API_FLAG_PNG } from '../../config/api';
import { COLS_LEADERBOARD } from '../../config/columns';
import LeaderboardComponent from '../common/LeaderboardComponent';

class LeaderboardPage extends React.Component {
    
    constructor(props){
		super(props)
     
        this.state = {
            serviceData: [],
            flagUrl : '',
            tableHeader : '',
            teams : []
        }
	}

    componentDidMount = () => {

    }

    fetchMatches = () => {
        const leagueService = new LeagueService()

        leagueService.setAuthorizationToken().then(() => {
            leagueService.fetchData().then((response) => {
                this.setState({ serviceData: response })
            }).then(() => {
                this.setState({ teams: leagueService.getTeams() })
            })
        })
    }

    fetchFlagUrl = () => { this.setState({ flagUrl: API_FLAG_PNG })}
    fetchColumns = () => { this.setState({ tableHeader: COLS_LEADERBOARD })}

    render = () => {

        if(this.state.serviceData.length === 0) {
            return (
                <Container className='pt-5 mx-10'>
                    <Row className='mb-5'>
                        <Col className='text-center'><h4>Processing your request...</h4></Col>
                    </Row>
                </Container>
            )
        }

        return (
            <LeaderboardComponent 
                data={{
                    serviceData: this.state.serviceData,
                    tableHeader: this.state.tableHeader,
                    flagUrl: this.state.flagUrl
                }}    
            />
        )
    }
    
    
}

export default LeaderboardPage