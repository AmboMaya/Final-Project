import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import {Card} from 'semantic-ui-react'
import windowSize from 'react-window-size'

class Graph extends Component {
  getGraphHeight () {
    if (this.props.windowWidth < 500) {
      return 90
    } else {
      return 60
    }
  }

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
              height={this.getGraphHeight}
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

export default windowSize(Graph)
