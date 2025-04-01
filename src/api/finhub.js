import axios from 'axios'
const TOKEN = 'curja7hr01qt2ncfeqi0curja7hr01qt2ncfeqig'
export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token:TOKEN
    }
})    