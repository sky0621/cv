import axios from 'axios'

export default class BasicService {
  getBasicInfo() {
    return axios.get('data/basic-info.json').then((res) => res.data.data)
  }
}
