import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Form, Grid, Header, Message} from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onChange = e => this.setState({ [ e.target.name ]: e.target.value })

  onSubmit = () => {}

  render () {
    return (
      <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 340}}>
            <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
            </Header>
            <Form error={this.props.auth.error} size='large'>
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
                placeholder='Username'
                value={this.state.username}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                placeholder='Password'
                type='password'
                value={this.state.password}
              />
              <Button as={Link} color='teal' fluid size='large' to="/">Login</Button>
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
