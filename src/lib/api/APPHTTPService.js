import axios from "axios";

class APPHTTPService {
    constructor(isMultipartrequests = false) {
        this.#initiate(isMultipartrequests);
        this.#createRequestInterceptor();
        this.#createResponseInterceptor();
    }
    #initiate(isMultipartrequests) {
        console.log("BASE URL:", import.meta.env.VITE_APP_BASE_URL)
        this.instance = axios.create({
            baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
            timeout: 18000,
            headers: {
                Accept: "application/json",
                "Content-Type": isMultipartrequests ? "multipart/form-data" : "application/json"
            }
        })
    };
    #createRequestInterceptor() {
        this.instance.interceptors.request.use(config => {
            const headers = {};
            if (localStorage.getItem("token")) {
                headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
            }
            config.headers = {
                ...config.headers,
                headers
            }
            return config;

        },
            (error) => {
                return Promise.reject(error)
            }
        )
    }
    #createResponseInterceptor() {
        this.instance.interceptors.response.use((response) => response, (error) => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/login";
            }
            return Promise.reject(error);
        })
    }

    #getResponseData(response) {
        return response.data;
    }
    async get(endpoint, params) {
        return this.instance.get(endpoint, params || {}).then(this.#getResponseData);
    }
    async post(endpoint, data) {
        console.log("HTTP POSt", endpoint, data)
        return this.instance.post(endpoint, data).then(this.#getResponseData);
    }
    async put(endpoint, data) {
        return this.instance.put(endpoint, data).then(this.#getResponseData);
    }
    async patch(endpoint, data) {
        return this.instance.patch(endpoint, data).then(this.#getResponseData);
    }
    async delete(endpoint) {
        return this.instance.delete(endpoint).then(this.#getResponseData);
    }
}
export default APPHTTPService;