import axios from 'axios';

const http = axios.create({
	baseURL: 'https://62683b4a01dab900f1cb8963.mockapi.io/'
});

export default http;