import axios from 'axios'

const apiConnection = axios.create({
  baseURL: process.env.apiUrl
})

export { apiConnection }
