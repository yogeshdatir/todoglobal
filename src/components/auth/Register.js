import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { register } from '../../actions/auth'
import { connect } from 'react-redux'

const Register = ({ isAuthenticated, register }) => {
  const initialState = {
    username: '',
    password1: '',
    email: '',
    password2: ''
  }

  const [userInfo, setUserInfo] = useState(initialState)

  const onChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const { username, email, password1, password2 } = userInfo
    if (password1 !== password2) {
      // add error handling toast here
      console.log("passwords don't match")
    } else {
      const newUser = {
        username,
        email,
        password1,
        password2
      }
      register(newUser)
    }
  }

  // Redirect to dashboard after/if registered
  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex" />
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>
              <form className="form-signin" onSubmit={onSubmit}>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputUserame"
                    className="form-control"
                    placeholder="Username"
                    required
                    autoFocus
                    name="username"
                    value={userInfo.username}
                    onChange={onChange}
                  />
                  <label htmlFor="inputUserame">Username</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    name="email"
                    value={userInfo.email}
                    onChange={onChange}
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>

                <hr />

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    name="password1"
                    value={userInfo.password}
                    onChange={onChange}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputConfirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    name="password2"
                    value={userInfo.password2}
                    onChange={onChange}
                  />
                  <label htmlFor="inputConfirmPassword">Confirm password</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                  Register
								</button>
                <p>
                  Already have an account?
									<Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register)