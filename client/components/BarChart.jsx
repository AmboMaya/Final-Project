import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
import {Card, Grid, Modal} from 'semantic-ui-react'

export default class BarChart extends Component {
  state = {
      chartData: {
          labels: ["Mood", "Sleep", "Monday", "Tuesday", "Wednesday", "Yesterday"],
          datasets: [{
              fill: false,
              // borderColor: '#E1350B',
              backgroundColor: 'black',
              label: 'Mood',
              data: [1.5, 3, 3, 5, 2, 1], //Placeholders for data
              borderWidth: 4
          }
      ]
      }
  }

  render () {
    return (
      <React.Fragment>
        <Card fluid>
          <Card.Content align="center">
            <Card.Header>Average Ratings</Card.Header>
          </Card.Content >
          <Card.Content align="center" >
            <Bar
              data={this.state.chartData}
              options={{
                maintainAspectRatio: true,
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    boxWidth: 30,
                    fontColor: 'black'
                  }
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      fontColor: 'black',
                      callback: function (label, index, labels) {
                        return yLabels[label]
                      }
                    }
                  }],
                  xAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      fontColor: 'black'
                    }
                  }]
                }
              }}
            />
          </Card.Content>
        </Card>
      </React.Fragment>
    )
  }
}

let yLabels = {
//   // 1: 'terrible',
//   // 2: 'bad',
//   // 3: 'average',
//   // 4: 'good',
//   // 5: 'great'
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5
}
