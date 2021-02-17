export const buttonControl = (btn, value) => {
    btn.disabled = value
}

export const getLanguage = () => {
    const userLang = navigator.language || navigator.userLanguage
    const newUserLang = userLang.split('-')[0]
    return newUserLang
}