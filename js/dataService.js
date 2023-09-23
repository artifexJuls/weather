const API_BASE_URL = 'http://api.openweathermap.org'
const APP_ID = '945767452af0ffeb3cc98c27a721332a'
const appIdParam = `appid=${APP_ID}`

const urls = {
    weather:    `${API_BASE_URL}/data/2.5/weather`,
}

class DataService {
   
    async getWeatherForecast(cityId) {
        const url = `${urls.weather}?id=${cityId}&${appIdParam}&units=metric`
        const response = await fetch(url)

        if (response.ok) {
            return await response.json()
        } else {
            console.error(`Error! Can't get data on url: ${url}.
                Details: status ${response.status}, message: ${response.statusText}
            `)
        }
    }

}

export const dataService = new DataService()