import React from 'react'
import {Card, Grid} from 'semantic-ui-react'
import ActivityLog from './ActivityLog'

export default class ActivityCard extends React.Component {
  
  state = {
    smiles: [
      {mood: 'fa-angry'},
      {mood: 'fa-frown'},
      {mood: 'fa-meh'},
      {mood: 'fa-smile'},
      {mood: 'fa-laugh'}
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Grid.Column align='center'>
          <Card>
            <Card.Content align='center'>
              <Grid>
                <Grid.Column floated='right' width={5}>
                  <i
                    className='ellipsis horizontal icon right'
                    floated='right'
                  />
                </Grid.Column>
              </Grid>
             
              <Card.Header>{this.props.name}</Card.Header>
              <Grid.Column align='center'>
                {this.state.smiles.map(smile => {
                  return (
                    <i
                      className={'far ' + `${smile.mood}` + ' fa-3x facesInCss'}
                      key={smile.mood}
                    />
                  )
                })}
              </Grid.Column>
            </Card.Content>
            <Card.Content extra>
            <ActivityLog />
          </Card.Content>
          </Card>
        </Grid.Column>
      </React.Fragment>
    )
  }
}
