// Write your code here
import './index.css'

const LatestMatch = props => {
  //   let teamName = ''
  const {latestMatchDetails, teamName} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-matches-card">
      <div className="match-summary">
        <p className="title">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="match-status">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo"
      />
      <div className="match-details-container">
        <h3 className="innings">First innings</h3>
        <p className="teamname">{firstInnings}</p>
        <h3 className="innings">Second Innings</h3>
        <p className="teamname">{secondInnings}</p>
        <h3 className="mom">Man Of The Match</h3>
        <p className="playername">{manOfTheMatch}</p>
        <h3 className="umpire">Umpires</h3>
        <p className="umpire">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
