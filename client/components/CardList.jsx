import React from 'react'
import {Card, Container, Grid, Divider, Image} from 'semantic-ui-react'

class CardList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <Container>
            <Grid columns={2} doubling stackable>
              <Grid.Column align='center'>
                <Card.Group>
                  <Card>
                    <Card.Content >
                      <Image src='https://imgix.bustle.com/rehost/2016/9/13/448e1dea-fcbc-4f59-acab-25946e3e47ac.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70' />
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>
            </Grid>
          </Container>
          <Divider />
        </div>
      </React.Fragment>
        <div>
      <Segment.Group>
       <Responsive as={Segment} minWidth={640}>
      Visible only if display has <code>640px</code> width and higher
    </Responsive>
    <Responsive as={Segment} minWidth={380}>
      Visible only if display has <code>380px</code> width and higher
    </Responsive>
  </Segment.Group>
  </div>
    )
  }
}


export default CardList
