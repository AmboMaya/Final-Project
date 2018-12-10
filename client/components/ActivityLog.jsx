import React from 'react'
import { Button, Divider, Form, TextArea, Modal, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addLog } from '../actions/records'

class ActivityLog extends React.Component {
  state = {
    open: false,
    log: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addLog(this.props.user, {
      activityId: this.props.id,
      log: this.state.log
    })
  }

  handleRef = component => (this.ref = component)
  open = () => this.setState({ open: true }, () => this.ref.focus())
  close = () => this.setState({ open: false })
  render() {
    return (
      <div>
        <a size="mini" onClick={this.open}>
          <i className="plus icon" />
          <span>Add log</span>
        </a>
        <Modal
          className="addLogModal"
          size="mini"
          open={this.state.open}
          onClose={this.close}
          closeIcon
        >
          <Modal.Content>
            <Card.Content align="center" />
            <Form onSubmit={this.submitHandler}>
              <TextArea
                name="log"
                value={this.state.log}
                onChange={this.handleChange}
                ref={this.handleRef}
                style={{ minWidth: 250 }}
              />
              <Divider />
              <Button
                type="submit"
                basic={true}
                size="mini"
                onClick={this.close}
              >
                Add
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLog: (id, record) => dispatch(addLog(id, record))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityLog)
