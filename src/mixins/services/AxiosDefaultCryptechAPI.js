import axios from 'axios';

export function create_axios (api_path){
	return axios.create({
		baseURL: process.env.VUE_APP_CRYPTECH_API+api_path,
		withCredentials: true,
	});
}
