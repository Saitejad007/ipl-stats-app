// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    recentMatches: [],
    latestMatches: '',
    teamName: '',
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const convertedResponse = await response.json()
    console.log(convertedResponse)

    const rawRecentMatchesData = convertedResponse.recent_matches
    const recentMatchDetails = rawRecentMatchesData.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    // console.log(recentMatchDetails)
    const rawLatestMatchesData = convertedResponse.latest_match_details
    const latestMatchDetails = {
      competingTeam: rawLatestMatchesData.competing_team,
      competingTeamLogo: rawLatestMatchesData.competing_team_logo,
      date: rawLatestMatchesData.date,
      manOfTheMatch: rawLatestMatchesData.man_of_the_match,
      matchStatus: rawLatestMatchesData.match_status,
      result: rawLatestMatchesData.result,
      firstInnings: rawLatestMatchesData.first_innings,
      secondInnings: rawLatestMatchesData.second_innings,
      umpires: rawLatestMatchesData.umpires,
      venue: rawLatestMatchesData.venue,
    }

    const teams = [
      {
        teamName: 'Delhi Capitals',
        id: 'DC',
      },
      {
        teamName: 'Sunrisers Hyderabad',
        id: 'SH',
      },
      {
        teamName: 'Mumbai Indians',
        id: 'MI',
      },
      {
        teamName: 'Kolkata Knight Riders',
        id: 'KKR',
      },
      {
        teamName: 'Kings XI Punjab',
        id: 'KXP',
      },
      {
        teamName: 'Chennai Super Kings',
        id: 'CSK',
      },
      {
        teamName: 'Rajasthan Royals',
        id: 'RR',
      },
      {
        teamName: 'Royal Challengers Bangalore',
        id: 'RCB',
      },
    ]

    const team = teams.find(eachItem => eachItem.id === id)

    // console.log(latestMatchDetails)
    this.setState({
      bannerUrl: convertedResponse.team_banner_url,
      recentMatches: recentMatchDetails,
      latestMatches: latestMatchDetails,
      teamName: team.teamName,
      teamId: id,
      isLoading: false,
    })
  }

  render() {
    const {
      bannerUrl,
      recentMatches,
      latestMatches,
      teamName,
      teamId,
      isLoading,
    } = this.state
    return (
      <div className={`team-matches-page-container ${teamId}`}>
        {isLoading ? (
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="responsive-container">
            <img src={bannerUrl} alt="team banner" className="banner" />
            <h3 className="side-heading">Latest Matches</h3>
            <LatestMatch
              latestMatchDetails={latestMatches}
              teamName={teamName}
            />
            <ul className="list-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
