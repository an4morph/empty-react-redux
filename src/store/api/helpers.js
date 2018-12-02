import qs from 'query-string'

const ENDPOINT = process.env.API_URL

export const createUrl = (route, prms = null) => {
  const params = prms ? `?${qs.stringify(prms)}` : ''
  return decodeURIComponent(`${ENDPOINT}${route}${params}`)
}

export const authHeader = () => ({
  'X-Authorization': `Bearer ${localStorage.getItem('token')}`,
})
