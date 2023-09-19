import { getElement } from "./helpers.js";

class ContentSwitcher {
    #content = getElement('#content')
    #preloader = getElement('#preloader')

    showContent = () => this.#content.hidden = false

    hideProloader = () => this.#preloader.hidden = true
}

export const contentSwitcher = new ContentSwitcher()