// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, imageUrl} = teamData
  console.log(id)
  return (
    <li className="list-item-home">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="card">
          <img src={imageUrl} alt={name} className="team-logo-home" />
          <p className="team-name-home">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
