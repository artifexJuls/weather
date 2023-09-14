const exm = {
    "weather": [
        { "description": "overcast clouds", "icon": "04n" }
    ],
    "main": {
        "temp": 290.62,
    },
    "name": "Kyiv",
}

export class Forecast {
    #name = ''
    #temp = ''
    #description = ''
    #icon = ''

    constructor({ weather, main, name }) {
        this.#name = name
        this.#temp = main.temp
        this.#description = weather[0].description
        this.#icon = weather[0].icon
    }

    createElement() {
        const div = document.createElement('div')

        div.classList.add('table_row')
        div.insertAdjacentHTML('beforeend', `
            <div class="title_city flex_item">
                ${this.#name}
            </div>
            <div class="weather flex_item">
                <span class="weather_temp">${this.#temp}</span>
                <span class="weather_description">${this.#description}</span>
            </div>
            <div class="icon flex_item">
                <img src="http://openweathermap.org/img/wn/${this.#icon}@2x.png" alt="weather icon">
            </div>
        `)

        return div

    }

}