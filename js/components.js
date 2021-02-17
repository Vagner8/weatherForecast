const daysForecast = (arr, locales) => {
    return arr.map(item => `
    <div class="col">
        <span class="badge bg-primary">
            ${new Date(item.dt * 1000).toLocaleString(locales, { day: 'numeric', month: 'numeric' })}
        </span>
        <p>
            ${Math.round(item.temp.day)} °C
        </p>
    </div>
    `).join('')
}

export const createItem = (tag, data, cityName, locales) => {
    if (data === 'showSpinner') {
        tag.innerHTML = `
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        `
        return
    }
    const {json, photo} = data
    const days = daysForecast(json.daily, locales)
    tag.innerHTML = `
        <div class="card p-2">
            <div class="row g-0">
                <div class="col-md-4">
                    <img class="img-fluid" src=${photo} alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${cityName}</h5>
                        <div class="row">
                            ${days}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}