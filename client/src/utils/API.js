import axios from 'axios';

export default {
    login: function() {
        return axios.get("/api/login")
    },
    test: function() {
        return axios.get("/api/test")
    }

    
}