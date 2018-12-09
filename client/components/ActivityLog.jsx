import React from 'react'
import { Button, TextArea, Modal, Card, Grid } from 'semantic-ui-react'

class ActivityLog extends React.Component {
  state = {
    open: false
  }
  
  handleRef = component => (this.ref = component)
  open = () => this.setState({ open: true }, () => this.ref.focus())
  close = () => this.setState({ open: false })
  render() {
    return (
      <div>
        <a size='mini' onClick={this.open}>
          <i className='plus icon'></i>
          <span>Add log</span>
        </a>
        <Modal className='addLogModal' size='mini' open={this.state.open} onClose={this.close} >
          <Modal.Content>
            <Card.Content/>
              <TextArea ref={this.handleRef} style={{minWidth: 250}}/>
              <Card.Content extra>
                <Grid>
                  <Grid.Column floated='right'> 
                    <Button basic={true} size='mini' onClick={this.close}>Add</Button>
                  </Grid.Column>    
                </Grid>
              </Card.Content>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ActivityLog