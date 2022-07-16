// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
// import {Link} from 'react-router-dom'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const fetchedData = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await fetchedData.json()
    console.log(teamsData)
    const convertedData = teamsData.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({teams: convertedData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home-container">
            <div className="heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>

            <ul className="teams-container">
              {teams.map(eachTeam => (
                <TeamCard teamData={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
