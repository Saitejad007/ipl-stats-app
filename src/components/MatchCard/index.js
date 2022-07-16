// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const status = matchStatus === 'Won' ? 'win' : 'lost'
  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="card-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
