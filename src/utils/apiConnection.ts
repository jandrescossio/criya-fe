import axios from 'axios'

const apiConnection = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export { apiConnection }
