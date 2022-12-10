/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 */

import axios from "axios";
import { API_ALL_MATCHES, API_AUTH_TOKEN } from "../config/api";

class LeagueService {    
    
    constructor(){
        this.matches = []
        this.teams = []
        this.apiMatches = API_ALL_MATCHES
        this.apiToken = API_AUTH_TOKEN
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
    getLeaderboard() {}
    
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

    getAuthorizationToken(){
        return localStorage.getItem('league_auth_token')
    }
}

export default LeagueService;