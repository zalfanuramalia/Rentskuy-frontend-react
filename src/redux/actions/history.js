import http from '../../helpers/http'

export const ListHistory = (token) => {
    return {
        type: 'GET_HISTORY',
        payload: http(token).get(`/history`)
    }
}

export const historyByUser = (id, token) => {
  return {
    type: 'HISTORY_USER',
    payload: http(token).get(`/history/users/${id}`)
  }
}