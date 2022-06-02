import axios from 'axios'

type ResponseType = {
	errorText: string
	info: string
	yourBody: {}
	yourQuery: {}
}

export const requestAPI = {
	createPost: (success: boolean) => {
		return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
	}
}