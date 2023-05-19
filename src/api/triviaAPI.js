import axios from 'axios'

const KEY = 'YOUR_KEY'

export default axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/trivia?',
    headers: {
        'X-Api-Key': KEY
    }
})
