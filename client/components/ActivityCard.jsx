import React from 'react'
import { Card, Button, Grid, Icon } from 'semantic-ui-react'

export default class ActivityCard extends React.Component {
  state = {
    smiles: [
      {
        mood: 'fa-angry'
      },
      {
        mood: 'fa-frown'
      },
      {
        mood: 'fa-meh'
      },
      {
        mood: 'fa-smile'
      },
      {
        mood: 'fa-laugh'
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Grid.Column align='center'>
          <Card>
            <Card.Content>
              <Grid>
                <Grid.Column floated='right' width={5}>
                  <i
                    className='ellipsis horizontal icon right'
                    floated='right'
                  />
                </Grid.Column>
              </Grid>
              <Card.Header>{this.props.name}</Card.Header>
              {this.state.smiles.map(smile => {
                return ( <i className={smile.mood}></i> )
              })}
            </Card.Content>
            <Card.Content extra>
              <i className='plus icon' />
            </Card.Content>
          </Card>
        </Grid.Column>
      </React.Fragment>
    )
  }
}
