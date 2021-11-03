const BASE_URL = "https://afternoon-forest-55790.herokuapp.com/api";

import TokenUtilities from './token';

export default {
    makeRequest: async function(path, method, data) {
        const token = TokenUtilities.getToken();
        const defaultHeaders = {
            'Content-Type': 'application/json'
        }
        if (token) {
            defaultHeaders['authorization'] = `Bearer ${token}`;
        }
        const options = {
            method,
            headers: defaultHeaders
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(BASE_URL + path, options);
        const responseData = await response.json();
        return responseData;
    }
}