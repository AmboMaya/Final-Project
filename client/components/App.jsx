import React from 'react'
// import {Header} from 'semantic-ui-react'
import CardList from './CardList'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/* <div className="ui two column centered grid">
          <div className="column">
            <Header>Hello</Header>
          </div>
        </div> */}
        <CardList />
      </React.Fragment>
    )
  }
}

export default App
