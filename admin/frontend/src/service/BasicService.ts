import axios from 'axios'

export class BasicService {
  async list(): string {
    return axios.get('http://localhost:3002/basic').then((res) => res.data)
  }
}
