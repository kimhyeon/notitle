import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  submitHandler = event => {
    event.preventDefault();
    let {
      email: { value: email },
      pwd: { value: pwd }
    } = event.target;
    console.log('[!]', email, pwd);

    axios
      .post('/users/login', {
        email,
        pwd
      })
      .then(res => {
        let { users, authenticate } = res.data;
        console.log(res.data);
      })
      .catch(err => {
        let { message } = err.response.data;
        console.log(err, message);
      });
  };

  cehckAuthenticate = event => {
    axios
      .get('/users/login')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        let { message } = err.response.data;
        console.log(err, message);
      });
  };

  logOut = event => {
    axios
      .post('/users/logout')
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          // location.href('/');
        }
      })
      .catch(err => {
        let { message } = err.response.data;
        console.log(err, message);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input name="email" type="text" />
          <input name="pwd" type="password" />
          <input type="submit" value="로그인" />
        </form>
        <br />
        <button onClick={this.logOut}>로그아웃</button> &nbsp;
        <button onClick={this.cehckAuthenticate}>check authenticate</button>
      </div>
    );
  }
}

export default Login;
