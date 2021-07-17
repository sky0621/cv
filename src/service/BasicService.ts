import axios from 'axios'

export default class BasicService {
  getBasicInfo() {
    return axios.get('data/basic.json').then((res) => res.data.data)
  }
}
