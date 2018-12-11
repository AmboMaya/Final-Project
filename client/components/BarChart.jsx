import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
import {Card, Grid, Modal} from 'semantic-ui-react'
import windowSize from 'react-window-size'

class BarChart extends Component {
  getGraphHeight () {
    if (this.props.windowWidth < 500) {
      return 60
    } else {
      return 40
    }
  }

  render () {
    return (
      <React.Fragment>
        <Card fluid>
          <Card.Content align="center">
            <Card.Header>Average ratings</Card.Header>
          </Card.Content >
          <Card.Content align="center" >
            <Bar
              data={this.props.chartData}
              width={100}
              height={this.getGraphHeight()}
              options={{
                maintainAspectRatio: true,
                legend: {
                  display: false,
                  position: 'bottom',
                  labels: {
                    boxWidth: 30,
                    fontColor: 'black'
                  }
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      suggestedMin: 0,
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
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5
}

export default windowSize(BarChart)
