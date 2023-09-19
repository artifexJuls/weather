import { getElement } from './helpers.js'
import { STATE } from './state.js'
import { dataService } from './dataService.js'
import { Forecast } from './forecast.js'
import { ForecastListView } from './forecastListView.js'
import { contentSwitcher } from './contentSwitcher.js'

window.addEventListener('DOMContentLoaded', async () => {
    const forecastListView = new ForecastListView('#tableBody')

    for (const cityId of STATE.citiesList) {
        const responseObj = await dataService.getWeatherForecast(cityId)
        const currentForecast = new Forecast(responseObj)
        STATE.currentForecastList.push(currentForecast)



        await delay(100);
        forecastListView.showForecast(currentForecast)
        contentSwitcher.showContent()
        contentSwitcher.hideProloader()
    }
})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const form = document.forms[0];
const search = form.search;
const searchError = document.querySelector("#searchError");

function showError() {
    searchError.style.display = "block";
}

function hideError() {
    searchError.style.display = "none";
}

search.addEventListener("focus", function () {
    hideError();
});

search.addEventListener("blur", function (event) {
    if (event.target.value.length === 0) {
        showError();
    }
});

form.addEventListener("submit", function (event) {
    if (form.search.value.length === 0) {
        event.preventDefault();
    }
});
