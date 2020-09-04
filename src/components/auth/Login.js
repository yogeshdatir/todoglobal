import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
	const initialState = {
		username: '',
		password: ''
	}

	const [ userInfo, setUserInfo ] = useState(initialState)

	const onChange = (event) => {
		setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
	}

	const onSubmit = (event) => {
		event.preventDefault()
		login(userInfo.username, userInfo.password)
	}

    // if already logged in redirect to dashboard
	if (isAuthenticated) {
		return <Redirect to="/" />
	}

	return (
		<Fragment>
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card card-signin my-5">
						<div className="card-body">
							<h5 className="card-title text-center">Sign In</h5>
							<form className="form-signin" onSubmit={onSubmit}>
								<div className="form-label-group">
									<input
										type="text"
										id="inputEmail"
										className="form-control"
										placeholder="Username"
										required
										autoFocus
										name="username"
										value={userInfo.username}
										onChange={onChange}
									/>
									<label htmlFor="inputEmail">Email address</label>
								</div>

								<div className="form-label-group">
									<input
										type="password"
										id="inputPassword"
										className="form-control"
										placeholder="Password"
										required
										name="password"
										value={userInfo.password}
										onChange={onChange}
									/>
									<label htmlFor="inputPassword">Password</label>
								</div>

								{/* <div className="custom-control custom-checkbox mb-3">
									<input type="checkbox" className="custom-control-input" id="customCheck1" />
									<label className="custom-control-label" htmlFor="customCheck1">
										Remember password
									</label>
								</div> */}
								<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
									Sign in
								</button>
								<p>
									Don't have an account?
									<Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login })(Login)