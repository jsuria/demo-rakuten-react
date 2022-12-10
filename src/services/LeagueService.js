/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 */

import axios from "axios";
import { API_ALL_MATCHES, API_AUTH_TOKEN, API_VERSION } from "../config/api";

class LeagueService {    
    
    constructor(){
        this.matches = []
        this.teams = []
        this.apiMatches = API_ALL_MATCHES
        this.apiToken = API_AUTH_TOKEN
        this.apiVersion = API_VERSION
    }

    /**
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
    setMatches(matches) {
        this.matches = matches
    }

    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {
        return this.matches
    }

    /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
    getLeaderboard() {
         let standingsPerTeam = this.getTeams().map((team) => {
                const matchesList = this.getMatches()
                                    .filter(match => {
                                        return match.homeTeam === team ||
                                               match.awayTeam === team
                                    })
                console.log('matches list: ', matchesList)
                // MP
                let matchesPlayed = matchesList.length
                
                // GF
                let goalsFor = matchesList.reduce((accumulator, currVal) => {
                    console.log(team, ' gf accumulator: ', accumulator)
                    console.log(team, ' goals for:', currVal)

                    if(team === currVal.homeTeam && currVal.homeTeamScore >= currVal.awayTeamScore) {
                        return parseInt(accumulator + currVal.homeTeamScore)
                    }
                    else if(team === currVal.awayTeam && currVal.awayTeamScore >= currVal.homeTeamScore) {
                        return parseInt(accumulator + currVal.awayTeamScore)
                    }

                    return accumulator
                }, 0)
                console.log(team, ' goals for:', goalsFor)

                // GA
                let goalsAgainst = matchesList.reduce((accumulator, currVal) => {
                    console.log(team, ' ga accumulator: ', accumulator)
                    console.log(team, ' goals against:', currVal)

                    if(team === currVal.homeTeam && currVal.homeTeamScore <= currVal.awayTeamScore) {
                        return parseInt(accumulator + currVal.homeTeamScore)
                    }
                    else if(team === currVal.awayTeam && currVal.awayTeamScore <= currVal.homeTeamScore) {
                        return parseInt(accumulator + currVal.awayTeamScore)
                    }

                    return accumulator
                }, 0)
                console.log(team, ' goals against:', goalsAgainst)

                // GD
                //let goalDifference = Math.abs(goalsFor - goalsAgainst)

                // Get wins
                let matchWins = matchesList.filter((match) => {
                    return (team === match.homeTeam && match.homeTeamScore > match.awayTeamScore) ||
                           (team === match.awayTeam && match.awayTeamScore > match.homeTeamScore)
                }).length

                // Get draws
                let matchDraws = matchesList.filter((match) => {
                    return (team === match.homeTeam && match.homeTeamScore === match.awayTeamScore) ||
                           (team === match.awayTeam && match.awayTeamScore === match.homeTeamScore)
                }).length

                let totalPoints = (matchWins * 3) + (matchDraws * 1)

                return {
                    teamName: team,
                    matchesPlayed: matchesPlayed,
                    goalsFor: goalsFor,
                    goalsAgainst: goalsAgainst,
                    points: totalPoints
                }
         })

         return standingsPerTeam
    }
    
    getTeams() {
        let allTeams = this.matches.map((match) => [match.homeTeam, match.awayTeam])
        console.log(allTeams)
        return Array.from(new Set(allTeams.flatMap(teams => teams)))
    }

    /**
     * Asynchronic function to fetch the data from the server.
     */
    async fetchData() {
        return axios.get(this.apiMatches,{
            headers:{
                Authorization:`Bearer ${this.getAuthorizationToken()}`
            }
        })
        .then(response => {
            this.setMatches(Object.values(response.data.matches))
            return response.data.matches
        })
    }

    async setAuthorizationToken(){
        await axios.get(this.apiToken)
             .then(response => localStorage.setItem('league_auth_token', response.data.access_token)) 
        
    }

    async getAPIVersion(){
        return axios.get(this.apiVersion)
             .then(response => response.data.version) 
    }

    getAuthorizationToken(){
        return localStorage.getItem('league_auth_token')
    }
}

export default LeagueService;