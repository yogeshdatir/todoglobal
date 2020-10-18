import axiosInstance from '../axiosInstances/axios.js'
import axios from 'axios'
import getCookie from '../axiosInstances/getCookie.js'

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './types'
import { toast } from 'react-toastify'

// CHECK TOKEN AND LOAD USER
export const loadUser = () => async (dispatch, getState) => {
	// User Loading
	dispatch({ type: USER_LOADING })

	await axiosInstance
		.get('/rest-auth/user/', tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data
			})
		})
		.catch((err) => {
			// add error handling dispatch here

			dispatch({ type: AUTH_ERROR })
		})
}

// LOGIN USER
export const login = (username, password) => (dispatch) => {
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}

	// Request Body
	const body = JSON.stringify({ username, password })

	axiosInstance
		.post('/rest-auth/login/', body, config)
		.then((res) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			// add error handling dispatch here
			toast.error(err.response.data['non_field_errors'][0], {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
			dispatch({ type: LOGIN_FAIL })
		})
}

// REGISTER USER
export const register = ({ username, email, password1, password2 }) => (dispatch) => {
	// Headers
	const config = {
		headers: {
			'Content-type': 'application/json'
		}
	}

	// Request Body
	const body = JSON.stringify({ username, email, password1, password2 })

	axiosInstance
		.post('/rest-auth/registration/', body, config)
		.then((res) => {
			toast.success('Registered Successfully!!!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
		})
		.catch((err) => {
			// add error handling dispatch here

			dispatch({ type: REGISTER_FAIL })
		})
}

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
	axiosInstance
		.post('/rest-auth/logout/', null, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: LOGOUT_SUCCESS
			})
		})
		.catch((err) => {
			// add error handling dispatch here
			console.log(err)
		})
}

// Setup config with token - helper function
export const tokenConfig = (getState) => {
	// Get token from state
	const token = getState().auth.token
	const csrftoken = getCookie('csrftoken');

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': csrftoken
		}
	}

	//  If token, add to headers config
	if (token) {
		config.headers['Authorization'] = `Token ${token}`
	}

	return config
}