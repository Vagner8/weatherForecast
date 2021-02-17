export const buttonControl = (btn, value) => {
    btn.disabled = value
}

export const getLanguage = () => {
    const userLang = navigator.language || navigator.userLanguage
    const newUserLang = userLang.split('-')[0]
    return newUserLang
}

export const cleanerItem = (element) => {
    element.innerHTML = ''
}

export const cleanerObj = (obj) => {
    for (let key in Object.keys(obj)) {
        obj[key] = ''
    }
}

export const createDeta = (dt, locales) => {
    return new Date(dt * 1000).toLocaleString(locales, { day: 'numeric', month: 'numeric' })
}