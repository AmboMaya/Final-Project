import React from 'react'
import { Divider, Form, Modal, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addLog } from '../actions/records'

class ActivityLog extends React.Component {
  state = {
    log: '',
    modalOpen: false
  }

  componentDidMount () {
    document.addEventListener('keydown', this.escKey, false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.escKey, false)
  }

  escKey = e => {
    if (event.keyCode === 27 && this.state.modalOpen) {
      this.setState({ modalOpen: false })
    }
  }

  openModal = () => this.setState({ modalOpen: true })
  closeModal = () => this.setState({ modalOpen: false })

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addLog(
      this.props.user.id,
      {
        activityId: this.props.id,
        log: this.state.log
      },
      this.props.selectedDate
    )
    this.closeModal()
  }

  render() {
    return (
      <div>
        
        <Modal
          trigger={
            <a size="mini" onClick={this.openModal}>
              <i className={this.props.icon} />
              <span>{this.props.text}</span>
            </a>}
          className="addLogModal"
          closeIcon
          size="mini"
          onClose={this.closeModal}
          open={this.state.modalOpen}
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
                maxLength="250"
              />
              <Divider />
              <Form.Button basic={true} size="mini" content='Add' />
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedDate, user }) => ({ selectedDate, user })

const mapDispatchToProps = dispatch => {
  return {
    addLog: (id, record, date) => dispatch(addLog(id, record, date))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityLog)
