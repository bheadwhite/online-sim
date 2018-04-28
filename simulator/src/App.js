import React, { Component } from 'react';
import WeatherDisp from './components/WeatherDisp'
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      state: 'Utah',
      city: 'sandy',
      fiveDayArr: [],
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      recentSrch: [],
      weather1: []
    }
  }
  

  render() {
    return (
      <div className="App">
      {/* http://api.wunderground.com/api/abb5af26a60c6791/forecast10day/q/${state}/${city}.json */}
        <h1>{"<"}DevWeather{" />"} </h1>
        <div className="App-fields">
        <input type='text' placeholder='city' onChange={(e)=> {this.setState({city: e.target.value})}}></input> {/**/}
        <select id="stateSelect" onChange={(e)=> this.setState({
          state: e.target.value
        })} >
        { this.state.states.map((state,i) => {
          return (
            <option value={state} key={i}>{state}</option>
            )
          })
        }
        </select>
        <button onClick={()=>{
          axios.get(`http://api.wunderground.com/api/abb5af26a60c6791/forecast10day/q/${this.state.state}/${this.state.city}.json`).then(res => {
            this.setState({weather1: res.data.forecast.simpleforecast.forecastday })
          })
        }}>Get Weather</button>
        </div>
        <h2>5 day forecast</h2>
        <WeatherDisp state={this.state.state}
                      city={this.state.city}/>
        <h2> recent searches </h2>
        recent cities serched.. clickable. {/**/}
      </div>
    );
  }
}

export default App;