import { getElement } from './helpers.js'
import { STATE } from './state.js'
import { dataService } from './dataService.js'
import { Forecast } from './forecast.js'
import { ForecastListView } from './forecastListView.js'
import { contentSwitcher } from './contentSwitcher.js'

window.addEventListener('DOMContentLoaded', () => {
    const forecastListView = new ForecastListView('#tableBody')

    STATE.citiesList.forEach(async (cityId) => {
        const responseObj = await dataService.getWeatherForecast(cityId)
        const currentForecast = new Forecast(responseObj)
        STATE.currentForecastList.push(currentForecast)

        forecastListView.showForecast(currentForecast)
        contentSwitcher.showContent()
        contentSwitcher.hideProloader()
    })

})

// window.addEventListener('load', () => {
//     contentSwitcher.showContent()
//     contentSwitcher.hideProloader()
// })
