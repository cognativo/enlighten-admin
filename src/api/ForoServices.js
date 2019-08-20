import axios from 'axios'

const client = axios.create({
  baseURL: 'https://us-central1-enlighten-services.cloudfunctions.net/scrapyServices/api/',
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
  async getForos () {
    return await this.execute('get', '/foros')
  },
  async getForo (id) {
    return this.execute('get', `/foros/${id}`)
  },
  async createForo (data) {
    return this.execute('post', '/foros', data)
  },
  async updateForo (id, data) {
    return this.execute('put', `/foros/${id}`, data)
  },
  async deleteForo (id) {
    return this.execute('delete', `/foros/${id}`)
  }
}