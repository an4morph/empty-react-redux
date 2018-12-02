import axios from 'axios'
import { createUrl, authHeader } from './helpers'


export const get = (route, options = {}) => {
  const { params, headers = {}, secure = false } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({ method: 'get', url, headers })
}

export const post = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'post', url, headers, data,
  })
}

export const put = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'put', url, headers, data,
  })
}

export const apiDelete = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'delete', url, headers, data,
  })
}

