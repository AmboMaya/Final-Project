import React from 'react'
import { connect } from 'react-redux'
import { Container, Form, Message, Input, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import { register, registerFailure } from '../actions/auth'

export class RegisterForm extends React.Component {
  state = {
    username: '',
    password: '',
    email: ''
  }

  changeHandler = e => this.setState({ [ e.target.name ]: e.target.value })

  register = () => {
    const { username, password, email } = this.state
    const { register, registerFailure } = this.props

    if (!username) {
      return registerFailure('Must provide username.')
    }

    if (!password) {
      return registerFailure('Must provide password.')
    }

    if (!email) {
      return registerFailure('Must provide email.')
    }

    register(username, password, email)
    this.setState({ username: '', password: '', email: '' })
  }

  render () {
    const { error, loggedIn, pending } = this.props.auth
    const usernameError = error && error.includes('username')
    const passwordError = error && error.includes('password')
    const emailError = error && error.includes('email')

    if (loggedIn) {
      return <Redirect to='/' />
    }

    return (
      <Form error={!!error} loading={pending}>
        <Message
          error
          header='Uh-oh'
          content={error} 
          />
        <Form.Field widths='equal'>
          <label>Username:</label>
          <Input
            error={usernameError}
            name='username'
            onChange={this.changeHandler}
            placeholder='Username'
            value={this.state.username} />
        </Form.Field>
        <Form.Field widths='equal'>
          <label>Password:</label>
          <Input
            error={passwordError}
            name='password'
            onChange={this.changeHandler}
            placeholder='Password'
            type='password'
            value={this.state.password} />
        </Form.Field>
        <Form.Field widths='equal'>
          <label>Email:</label>
          <Input
            error={emailError}
            name='email'
            onChange={this.changeHandler}
            placeholder='Email'
            value={this.state.email} />
        </Form.Field>
        <Form.Field widths='equal'>
          <Button
            disabled={pending}
            onClick={this.register}>Register</Button>
        </Form.Field>
      </Form>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  register: (username, password, email) => dispatch(register(username, password, email)),
  registerFailure: error => dispatch(registerFailure(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)