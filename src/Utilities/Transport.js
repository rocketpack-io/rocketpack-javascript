import axios from 'axios'

const Transport = {

  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  addDefaultHeader(key, value) {
    axios.defaults.headers.common[key] = value
  },
  removeDefaultHeader(key) {
    delete axios.defaults.headers.common[key]
  },
  
  //-------------------------------------------------

  get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data, {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },
  
  customRequest(data) {
    return axios(data)
  },
}

export default Transport
