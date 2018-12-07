import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import { getData, showMonth, showWeek } from '../actions/graph'
import {connect} from 'react-redux'

class Graph extends Component {

    state = {
        chartData: {
            labels: ["12.12.18", "13.12.18", "14.12.18", "15.12.18", "16.12.18", "17.12.18"], //Placeholders for dates
            datasets: [{
                fill: false,
                borderColor: '#E1350B',
                backgroundColor: '#E1350B',
                label: 'Mood',
                data: [1, 3, 3, 5, 2, 1], //Placeholders for data
                borderWidth: 3
            },{
                fill: false,
                borderColor: '#68829E',
                backgroundColor: '#68829E',
                label: 'Diet',
                data: [2, 4, 1, 5, 1, 3], //Placeholders for data
                borderWidth: 2
            },{
                fill: false,
                borderColor: '#AEBD38',
                backgroundColor: '#AEBD38',
                label: 'Exercise',
                data: [2, 2, 1, 2, 2, 3], //Placeholders for data
                borderWidth: 2
            },{
                fill: false,
                borderColor: '#598234',
                backgroundColor: '#598234',
                label: 'Sleep',
                data: [5, 4, 3, 5, 2, 3], //Placeholders for data
                borderWidth: 2
            },{
                fill: false,
                borderColor: '#CF6F6F',
                backgroundColor: '#CF6F6F',
                label: 'Meditation',
                data: [2, 3, 5, 1, 1, 2], //Placeholders for data
                borderWidth: 2
            },{
                fill: false,
                borderColor: '#F47D4A',
                backgroundColor: '#F47D4A',
                label: 'Alcohol',
                data: [5, 4, 3, 2, 1, 5], //Placeholders for data
                borderWidth: 2
            },{
                fill: false,
                borderColor: '#FFEC5C',
                backgroundColor: '#FFEC5C',
                label: 'Water',
                data: [1, 2, 1, 5, 4, 4], //Placeholders for data
                borderWidth: 2
            },{
                fill: false,
                borderColor: '#505160',
                backgroundColor: '#505160',
                label: 'Vice',
                data: [2, 5, 1, 3, 2, 1], //Placeholders for data
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
                            return yLabels[label];
                        }
                    }
                }]
            }
        }}
        />
        <Button onClick={() => this.props.weekSort('WEEK')}>Week</Button>
        <Button onClick={() => this.props.monthSort('MONTH')}>Month</Button>

      </div>
    )
  }
}

let yLabels = {
    1 : 'terrible', 2 : 'bad', 3 : 'average', 4 : 'good',
    5 : 'great'
}

export function weekSort (items) {
    // return items.sort((a, b) => {
    //   let levelA = Number(a.level_id)
    //   let levelB = Number(b.level_id)
    //   return levelA - levelB
    // })
  }
  
  export function monthSort (items) {
    // return items.sort((a, b) => {
    //   let methodA = Number(a.method_id)
    //   let methodB = Number(b.method_id)
    //   return methodB - methodA
    // })
  }
  
  
  const mapStateToProps = state => {
    const sortedData  = [... state.data]
    if (state.sort.sortOrder == 'WEEK') {
      weekSort(sortedData)
    } else if (state.sort.sortOrder == 'MONTH') {
      monthSort(sortedData)
    } 
  
    return {
      data: state.sort.sortOrder,
      labels: state.sort.sortOrder
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getData: () => dispatch(getData()),
      showMonth: (x) => dispatch(showMonth(x)),
      showWeek: (x) => dispatch(showWeek(x)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Graph)