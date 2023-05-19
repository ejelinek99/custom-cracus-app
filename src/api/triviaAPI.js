import axios from 'axios'

const KEY = '1Ny8uLW8zABOkj2kImRvwg==BUZTCtCL5rD7Fhen'

export default axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/trivia?',
    headers: {
        'X-Api-Key': KEY
    }
})