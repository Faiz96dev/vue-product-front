import { defineStore } from 'pinia'


export const useWeather = defineStore('weather', {
  state: () => ({
    error: <string>(""),
    loading: <boolean>(false),
    productList: <Array<Product>>([]),
  }),


  actions: {
 
    async fetchProducts() {
      try {
        this.error = ''
        this.loading = true
        const productData = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${sity.lat}&lon=${sity.lon}&appid=${env.apiKey}&units=metric`)
        if (productData) {
          this.weatherData = productData
          this.weatherList = productData.data
          this.setWeatherByDate(new Date())
        }
        this.loading = false
      } catch (error: any) {
        this.loading = false
        this.error = error?.message;
      }
    }

  },
})

