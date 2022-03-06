import http from "../../helpers/http"

export const login = (email, password)=> {
  const params = new URLSearchParams()
  params.append('email', email)
  params.append('password', password)
  return({
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', params)
  })
}

export const getDataUser = (token)=> {
  return({
    type: 'AUTH_USERDATA',
    payload: http(token).get('/profile')
  })
}