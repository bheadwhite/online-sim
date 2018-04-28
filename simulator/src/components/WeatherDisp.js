import React, { Component } from 'react';
import axios from 'axios'
import './WeatherDisp.css'

export default class WeatherDisp extends Component {
    constructor(props){
        super(props)
        this.state={
            fiveDayArr: [],
            state: this.props.state,
            city: this.props.city,

        }
    }
    componentDidMount(){
        axios.get(`http://api.wunderground.com/api/abb5af26a60c6791/forecast10day/q/${this.state.state}/${this.state.city}.json`).then((res)=> {
          this.setState({
              fiveDayArr: res.data.forecast.simpleforecast.forecastday

        })
      })
    }
    render() {
        this.state.fiveDayArr.splice(5)
        console.log(this.state.fiveDayArr)
        return (
            <div className='WeatherDisp'>
            {
                this.state.fiveDayArr.map((day, i) => {
                       return (<div className="WeatherDisp-box" key={i}>
                       <ul>
                       <li>{day.date.weekday}</li>
                       <li>{day.conditions}</li>
                       <li>High {day.high.fahrenheit}</li>
                       <li>Low {day.low.fahrenheit}</li>
                       <li><img src={day.icon_url} alt='weather icon' /></li>
                       </ul>
                       </div>) 
                }
                    )
                }
            </div>
        )
    }
}