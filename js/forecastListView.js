import { Forecast } from './forecast.js'
import { getElement } from './helpers.js'
import { STATE } from './state.js'

export class ForecastListView {
    #forecastTableBody

    constructor(tableBodyId) {
        this.#forecastTableBody = getElement(tableBodyId)
   }

   showForecast(item) {
    if (item instanceof Forecast) {
        console.log('I am Forecast')
        this.#forecastTableBody.append(item.createElement())
    } else {
        return
    }
   }
}