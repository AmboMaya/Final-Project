import React from 'react'
import { Button, TextArea, Modal, Card, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addLog } from '../actions/records'

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
            <Card.Content align="center"/>
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

const mapDispatchToProps = dispatch => {
  return {
    addLog: (id, record) => dispatch(addLog(id, record))
  }
}

export default connect(null, mapDispatchToProps)(ActivityLog)
