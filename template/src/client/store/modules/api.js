import request from 'superagent'

const isProd = process.env.NODE_ENV === 'production'

const domain = process.env.SERVER ? '' : 'http://localhost:8080'

export default {
  /**
   * Get Message
   * 
   * @returns [Object Promise]
   */
  getLogo() {
    return new Promise((resolve, reject) => {
      request.get(domain + '/api/logo').end((error, response) => {
        let res = response ? JSON.parse(response.text) : null
        if (error || res.message) {
          reject(error || res.message)
        } else {
          resolve(res.data)
        }
      })
    })
  },
  /**
   * Get List
   * 
   * @returns [Object Promise]
   */
  getList() {
    return new Promise((resolve, reject) => {
      request.get(domain + '/api/list').end((error, response) => {
        let res = response ? JSON.parse(response.text) : null
        if (error || res.message) {
          reject(error || res.message)
        } else {
          resolve(res.data)
        }
      })
    })
  }
}