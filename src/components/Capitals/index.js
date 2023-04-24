import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({selectedCapital: event.target.value})
  }

  getCountry = () => {
    const {selectedCapital} = this.state
    const selectedObject = countryAndCapitalsList.find(
      each => each.id === selectedCapital,
    )
    return selectedObject.country
  }

  render() {
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="app-heading">Countries And Capitals</h1>
          <div className="question-container">
            <select className="select-container" onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-text">is capital of which country?</p>
          </div>
          <p className="country-name">{this.getCountry()}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
