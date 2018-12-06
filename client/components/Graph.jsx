import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

export default class Chart extends Component {

    state = {
        chartData: {
            labels: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Yesterday"], //Placeholders for dates
            datasets: [{
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
                label: 'Mood',
                data: [1, 3, 3, 5, 2, 1],
                borderWidth: 2
            },{
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,1)',
                label: 'Diet',
                data: [2, 4, 1, 5, 1, 3],
                borderWidth: 2
            },{
                fill: false,
                borderColor: 'blue',
                backgroundColor: 'blue',
                label: 'Exercise',
                data: [2, 2, 1, 2, 2, 3],
                borderWidth: 2
            },{
                fill: false,
                borderColor: 'pink',
                backgroundColor: 'pink',
                label: 'Sleep',
                data: [5, 4, 3, 5, 2, 3],
                borderWidth: 2
            },{
                fill: false,
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                label: 'Meditation',
                data: [2, 3, 5, 1, 1, 2],
                borderWidth: 2
            },{
                fill: false,
                borderColor: 'purple',
                backgroundColor: 'purple',
                label: 'Alcohol',
                data: [5, 4, 3, 2, 1, 5],
                borderWidth: 2
            },{
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'orange',
                label: 'Water',
                data: [1, 2, 1, 5, 4, 4],
                borderWidth: 2
            },{
                fill: false,
                borderColor: 'green',
                backgroundColor: 'green',
                label: 'Vice',
                data: [2, 5, 1, 3, 2, 1],
                borderWidth: 2
            }
        ]
        }
    }
  render() {
    return (
      <div>
        <Line 
        data={this.state.chartData}
        options={{
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(label, index, labels) {
                            // for a value (tick) equals to 8
                            return yLabels[label];
                            // 'junior-dev' will be returned instead and displayed on your chart
                        }
                    }
                }]
            }
        }}
        />
      </div>
    )
  }
}

let yLabels = {
    1 : 'terrible', 2 : 'bad', 3 : 'average', 4 : 'good',
    5 : 'great'
}