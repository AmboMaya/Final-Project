import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Form, Grid, Header} from 'semantic-ui-react'

class LoginForm extends React.Component {
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
            <Form size='large'>

              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username or E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Button as={Link} color='teal' fluid size='large' to="/">Login</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default connect(LoginForm)
