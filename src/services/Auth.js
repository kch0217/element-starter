import Vue from 'vue'

export default {
  async login (data) {
    const res = await Vue.$api.connection.http.post('/login', data)
    localStorage.setItem('user', JSON.stringify(res.data))
    return res.data
  },
  async logout () {
    localStorage.removeItem('user')
    return Vue.$api.connection.http.post('/logout')
  },
  async getProfile () {
    const res = await Vue.$api.connection.http.get('/profile')
    localStorage.setItem('user', JSON.stringify(res.data))
    return res.data
  }
}