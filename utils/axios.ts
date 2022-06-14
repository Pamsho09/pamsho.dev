import axios from 'axios'
class ApiService {
  requestAxios

  static newService() {
    return new ApiService()
  }

  initConfigAxios() {
    this.requestAxios = axios.create({
      baseURL: 'http://localhost:5000/',
      timeout: 30000,
    })
    return this
  }

  initInterceptorsRequest() {
    this.requestAxios.interceptors.request.use(
      (pConfig) => {
        const config = pConfig
        config.headers['content-type'] = 'application/json'
        return config
      },
      (error) => Promise.reject(error)
    )
    return this
  }

  initInterceptorsResponse() {
    this.requestAxios.interceptors.response.use((response) => response.data)
    return this
  }

  static build() {
    return ApiService.newService()
      .initConfigAxios()
      .initInterceptorsRequest()
      .initInterceptorsResponse().requestAxios
  }
}

export default ApiService.build()
