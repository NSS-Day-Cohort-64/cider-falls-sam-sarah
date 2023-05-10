import { getLocations, getServices } from "./database.js";

const serviceFunction = getServices()
const locationFunction = getLocations()

export const Services = () => {
    let html = "<ol>"

    for (const  service of serviceFunction) {
        html += `<li data-type="services" data-id="${service.id}" data-name="${service.name}">We have the following services:${service.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "services") {
            const serviceId = itemClicked.dataset.id
            for (const location of locationFunction ) {
            if (location.serviceId == serviceId) {
                window.alert(`${serviceFunction.name} is available at ${location.name}`)
                }
            }
        }
    }
)

