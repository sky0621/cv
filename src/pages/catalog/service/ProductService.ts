import axios from 'axios'

export default class ProductService {
  getProductsSmall() {
    return axios.get('data/products-small.json').then((res) => res.data.data)
  }
}
