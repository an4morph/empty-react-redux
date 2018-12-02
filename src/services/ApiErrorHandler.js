import history from '../History'

export default (err) => {
  const error = err.response.data
  if (error.errorCode === 401) history.push('/login')
  return error.message || 'Неизвестная ошибка'
}
