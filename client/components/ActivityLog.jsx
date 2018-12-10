import React from 'react'
import { Divider, Form, Modal, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addLog } from '../actions/records'

class ActivityLog extends React.Component {
  state = {
    open: false,
    log: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addLog(this.props.user.id, {
      activityId: this.props.id,
      log: this.state.log
    }),
      console.log(
        (this.props.user.id,
        {
          activityId: this.props.id,
          log: this.state.log
        })
      )
  }

  // handleRef = component => (this.ref = component)
  // open = () => this.setState({ open: true }, () => this.ref.focus())
  // close = () => this.setState({ open: false })
  render() {
    return (
      <div>
        
        <Modal
          trigger={<a size="mini" onClick={this.open}>
          <i className="plus icon" />
          <span>Add log</span>
        </a>}
          className="addLogModal"
          size="mini"
          closeIcon
        >
          <Modal.Content>
            <Card.Content align="center" />
            <Form onSubmit={this.submitHandler}>
              <Form.TextArea
                name="log"
                label={this.props.name}
                placeholder="Tell us more..."
                onChange={this.handleChange}
                style={{ minWidth: 250 }}
              />
              <Divider />
              <Form.Button basic={true} size="mini" onClick={this.close}>
                Add
              </Form.Button>
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
