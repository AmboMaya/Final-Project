import React from 'react'
import connect from 'react-redux'

const Loading = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.pending && <h1>Loading...</h1>}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    pending: state.pending
  }
}

export default connect(mapStateToProps)(Loading)
