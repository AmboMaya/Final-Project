import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import {Card, Grid, Modal} from 'semantic-ui-react'

export default class Chart extends Component {
//   state = {
//       chartData: {
//           labels: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Yesterday"],
//           datasets: [{
//               fill: false,
//               borderColor: '#E1350B',
//               backgroundColor: '#E1350B',
//               label: 'Mood',
//               data: [1, 3, 3, 5, 2, 1], //Placeholders for data
//               borderWidth: 4
//           },{
//               fill: false,
//               borderColor: '#68829E',
//               backgroundColor: '#68829E',
//               label: 'Diet',
//               data: [2, 4, 1, 5, 1, 3], //Placeholders for data
//               borderWidth: 2
//           },{
//               fill: false,
//               borderColor: '#AEBD38',
//               backgroundColor: '#AEBD38',
//               label: 'Exercise',
//               data: [2, 2, 1, 2, 2, 3], //Placeholders for data
//               borderWidth: 2
//           },{
//               fill: false,
//               borderColor: '#598234',
//               backgroundColor: '#598234',
//               label: 'Sleep',
//               data: [5, 4, 3, 5, 2, 3], //Placeholders for data
//               borderWidth: 2
//           },{
//               fill: false,
//               borderColor: '#CF6F6F',
//               backgroundColor: '#CF6F6F',
//               label: 'Meditation',
//               data: [2, 3, 5, 1, 1, 2], //Placeholders for data
//               borderWidth: 2
//           },{
//               fill: false,
//               borderColor: '#F47D4A',
//               backgroundColor: '#F47D4A',
//               label: 'Alcohol',
//               data: [5, 4, 3, 2, 1, 5], //Placeholders for data
//               borderWidth: 2
//           },{
//               fill: false,
//               borderColor: '#FFEC5C',
//               backgroundColor: '#FFEC5C',
//               label: 'Water',
//               data: [1, 2, 1, 5, 4, 4], //Placeholders for data
//               borderWidth: 2
//           },{
//               fill: false,
//               borderColor: 'white',
//               backgroundColor: 'white',
//               label: 'Vice',
//               data: [2, 5, 1, 3, 2, 1], //Placeholders for data
//               borderWidth: 2
//           }
//       ]
//       }
//   }

  render () {
    return (
      <React.Fragment>
        <Card fluid>
          <Card.Content align="center">
            <Card.Header>Progress graph</Card.Header>
          </Card.Content >
          <Card.Content align="center" className='graphHeader'>
            <Line
              data={this.props.chartData}
              width={100}
              height={80}
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
                    gridLines: {
                      display: false
                    },
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
  // 1: 'terrible',
  // 2: 'bad',
  // 3: 'average',
  // 4: 'good',
  // 5: 'great'
  1: 1, 2: 2, 3: 3, 4: 4, 5: 5
}
