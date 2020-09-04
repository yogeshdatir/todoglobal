import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (auth.isLoading) {
				// you can add spinner here
				return <h2>Loading...</h2>
			} else if (!auth.isAuthenticated) {
				return <Redirect to="/login" />
			} else {
				return <Component {...props} />
			}
		}}
	/>
)

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)