export const createItem = (tag, data, cityName, locales) => {
    const {json} = data
    tag.innerHTML = `
        <div class="card p-2">
            <div class="row g-0">
                <div class="col-md-4">
                    <img class="img-fluid" src="" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${cityName}</h5>
                        <div class="row">
                            Forecast
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}