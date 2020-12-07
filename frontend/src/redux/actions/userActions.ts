import axios from 'axios'
import actionTypes from './actionTypes'

export default function sendUser (userInfo) {
  return async (dispatch: Function) => {
    const endpoint = 'http://192.168.0.21:7777/users/'
    try {
      const userItem = await axios.post(endpoint, userInfo)
      dispatch(userItem)
    } catch (error) {
      dispatch(error)
    }
  }
}
