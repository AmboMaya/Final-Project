import React from 'react'
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {Form, Grid, Header, Message} from 'semantic-ui-react'

import { login } from '../actions/auth'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [ name ]: value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render () {
    if (this.props.auth.loggedIn) {
      return <Redirect to='/' />
    }

    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>
          {`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}
        </style>
        <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 340}}>
            <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
            </Header>
            <Form error={this.props.auth.error} size='large' onSubmit={this.handleSubmit}>
              <Message
                error
                header='Login Error'
                content={this.props.auth.error}
              />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name='username'
                onChange={this.handleChange}
                placeholder='Username'
                value={this.state.username}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                onChange={this.handleChange}
                type='password'
                placeholder='Password'
                value={this.state.password}
              />
              <Form.Button color='teal' fluid size='large' content='Login' />
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
