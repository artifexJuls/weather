const checkResult = (result, selector) => {
    if (!result || result.length === 0) {
        console.error(`Can't found element with selector "${selector}"`)
        return null
    } else {
        return result
    }
}

export const getElement = (selector) => {
    return checkResult(document.querySelector(selector), selector)
}
export const getElements = (selector) => {
    return checkResult(document.querySelectorAll(selector), selector)
}