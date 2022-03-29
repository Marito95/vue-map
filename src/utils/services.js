import axios from 'axios'
export default class AxiosService {
    static base_url = 'http://localhost:3001'
    static getData() {
        return axios.get(AxiosService.base_url);
    }
}