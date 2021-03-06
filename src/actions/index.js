import constants from '../constants'
import { TurboClient } from '../utils'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

	fetchUsers: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
		}
	},

	addUser: (params) => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
		}
	},

	// Unlike addUser, register() also maintains a session for login state. After calling 
	// TurboClient.createUser(), the new user is logged in as well:
	register: (params) => {
		return dispatch => {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
		}
	},

	loginUser: (credentials) => {
		return dispatch => {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
		}
	},
	logoutUser: () => {
		return dispatch => {
			return dispatch( TurboClient.logout(constants.LOGOUT_USER) )
		}
	},

	currentUser: () => {
		return dispatch => {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
		}
	},

	createProject: params => {
			return dispatch => {
				return dispatch(TurboClient.postRequest('projects',params, constants.NEW_PROJECT))
			}
	},

	getProjects: params => {
			return dispatch => {
				return dispatch(TurboClient.getRequest('projects',params, constants.GET_PROJECTS))
			}
	},

	updateProject: (orig, updated) => {
		return dispatch => {
			return dispatch(TurboClient.putRequest('projects', orig, updated, constants.UPDATE_PROJECT))
		}
	}
	
}
