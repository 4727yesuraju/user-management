import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URI,
    header : {
        "Content-Type" : 'application/json'
    }
});

export default axiosInstance;