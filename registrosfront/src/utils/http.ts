import axios from 'axios'

console.log('API URL ' + process.env.GATSBY_API_URL)

export const http = axios.create({
  baseURL: process.env.GATSBY_API_URL
})