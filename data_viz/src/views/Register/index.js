import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {submitForm, getUser} from '../../actions/'

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      user_error: false
    }
  }

  async componentDidMount() {
    const id = 0;
    const user_data = await this.props.getUser(0);
    console.log(user_data)
  }
  
  handleChange(e) {
    console.log(e.target.name)
    if(e.target.name == 'username') {
      this.setState({
        username: e.target.value
      }, function(){
        console.log(this.state)
      })
    }
    if(e.target.name == 'password') {
      this.setState({
        password: e.target.value
      }, function(){
        console.log(this.state)
      })
    }

    console.log(e.target.value);
  }

  handleForm() {
    console.log(this.state)
    const userData = {
      username: this.state.username,
      password: this.state.password
    }

    if(this.state.username.length > 1 && this.state.password.length > 1) {
      this.setState({
        user_error: false
      })
      this.props.submitForm(userData);
    } else {
      this.setState({
        user_error: true
      })
    }
  }

  render () {
    return (
      <div className="userform">
        <h1>REGISTER</h1>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' name='username' onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' name='password' type='password' onChange={this.handleChange.bind(this)}/>
          </Form.Field>
         
        <Button type='submit' onClick={this.handleForm.bind(this)}>Submit</Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  user: state.user,
  browser: state.browser
});

export default connect(mapStateToProps, {submitForm, getUser})(Register);