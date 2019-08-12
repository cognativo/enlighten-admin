import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:7000/api/',
  json: true
})

export default {

  async execute (method, resource, data) {
    return client({
      method,
      url: resource,
      data,  
    }).then(req => {
      return req.data
    })
  },
  async getPesquisas () {
    return await this.execute('get', '/pesquisas')
  },
  async getPesquisa (id) {
    return this.execute('get', `/pesquisas/${id}`)
  },
  async createPesquisa (data) {
    return this.execute('post', '/pesquisas', data)
  },
  async updatePesquisa (id, data) {
    return this.execute('put', `/pesquisas/${id}`, data)
  },
  async deletePesquisa (id) {
    return this.execute('delete', `/pesquisas/${id}`)
  }
}